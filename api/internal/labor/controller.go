package labor

import (
	"crypto/sha256"
	"encoding/base64"
	"github.com/absentbird/TESC-Farm/internal/util"
	"github.com/gin-gonic/gin"
	"github.com/google/uuid"
	"gorm.io/gorm"
	"net/http"
	"strconv"
	"time"
)

func hashUid(uid string) string {
	bytenum := []byte(uid)
	hash := sha256.New()
	hash.Write(bytenum)
	return base64.StdEncoding.EncodeToString(hash.Sum(nil))
}

func getWorker(uid string) (worker Worker, last Hours) {
	if err := util.DB.InnerJoins("Worker", util.DB.Where(&Worker{Barcode: uid})).Order("Start desc").First(&last).Error; err != nil {
		if err == gorm.ErrRecordNotFound {
			worker := Worker{}
			worker.Barcode = uid
			util.DB.Create(&worker)
			last.WorkerID = worker.ID
		} else {
			return
		}
	}
	return
}

// Hours
func AllHours(c *gin.Context) {
	records := []Hours{}
	if err := util.DB.Preload("Worker").Preload("Task").Preload("Task.Area").Preload("Task.Tags").Preload("Task.Planting").Preload("Task.Planting.Crop").Preload("Task.Planting.Bed").Preload("Task.Planting.Bed.Area").Preload("Task.Harvest").Preload("Task.Harvest.Crop").Preload("Task.Harvest.Bed").Preload("Task.Harvest.Bed.Area").Preload("Task.Process").Preload("Task.Process.Harvest").Preload("Task.Process.Harvest.Crop").Preload("Task.Process.Harvest.Bed").Preload("Task.Process.Harvest.Bed.Area").Preload("Task.Process.Product").Find(&records).Error; err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		return
	}
	c.JSON(http.StatusOK, records)
}

func GetHours(c *gin.Context) {
	record := Hours{}
	if err := util.DB.First(&record, c.Param("id")).Error; err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		return
	}
	c.JSON(http.StatusOK, record)
}

func GetWorking(c *gin.Context) {
	records := []Hours{}
	if err := util.DB.Preload("Worker").Preload("Task").Preload("Task.Area").Preload("Task.Tags").Preload("Task.Planting").Preload("Task.Planting.Crop").Preload("Task.Planting.Bed").Preload("Task.Planting.Bed.Area").Preload("Task.Harvest").Preload("Task.Harvest.Crop").Preload("Task.Harvest.Bed").Preload("Task.Harvest.Bed.Area").Preload("Task.Process").Preload("Task.Process.Harvest").Preload("Task.Process.Harvest.Crop").Preload("Task.Process.Harvest.Bed").Preload("Task.Process.Harvest.Bed.Area").Preload("Task.Process.Product").Where("Duration = ?", 0).Find(&records).Error; err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		return
	}
	c.JSON(http.StatusOK, records)
}

func AddHours(c *gin.Context) {
	record := Hours{}
	if err := c.ShouldBindJSON(&record); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}
	util.DB.Create(&record)
	c.JSON(http.StatusOK, record)
}

func AddPunch(c *gin.Context) {
	type ScanPunch struct {
		Barcode string `json:"barcode"`
		TaskID  int    `json:"task,omitempty"`
	}
	punch := ScanPunch{}
	if err := c.ShouldBindJSON(&punch); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}
	if punch.TaskID < 0 {
		punch.TaskID = 0
	}
	uid := hashUid(punch.Barcode)
	_, last := getWorker(uid)
	if last.Duration == 0 {
		last.Duration = time.Now().Sub(last.Start).Hours()
		util.DB.Save(&last)
	}
	if punch.TaskID == 0 {
		c.JSON(http.StatusOK, last)
		return
	}
	record := Hours{}
	record.Start = time.Now()
	record.Duration = 0
	record.WorkerID = last.WorkerID
	record.TaskID = uint(punch.TaskID)
	util.DB.Create(&record)
	c.JSON(http.StatusOK, record)
}

func TeamPunch(c *gin.Context) {
	type ScanPunch struct {
		Barcode string `json:"barcode"`
		Count   uint   `json:"count"`
		TaskID  uint   `json:"task,omitempty"`
	}
	punch := ScanPunch{}
	if err := c.ShouldBindJSON(&punch); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}
	if punch.TaskID < 0 {
		punch.TaskID = 0
	}
	uid := hashUid(punch.Barcode)
	worker, last := getWorker(uid)

	// if the task is the same, update the people working on it
	if punch.TaskID == last.TaskID {
		team := Team{}
		team.Start = time.Now()
		team.Count = punch.Count
		team.HoursID = last.ID
		util.DB.Create(&team)
		c.JSON(http.StatusOK, team)
		return
		// If already tracking a task, stop it first
	} else if last.Duration == 0 {
		last.Duration = time.Now().Sub(last.Start).Hours()
		util.DB.Save(&last)
	}
	// If punching in, create a new record for the new punch
	hours := Hours{}
	hours.Start = time.Now()
	hours.Duration = 0
	hours.WorkerID = worker.ID
	hours.TaskID = uint(punch.TaskID)
	util.DB.Create(&hours)
	team := Team{}
	team.Start = time.Now()
	team.Count = punch.Count
	team.HoursID = hours.ID
	util.DB.Create(&team)
	c.JSON(http.StatusOK, team)
}

func UpdateHours(c *gin.Context) {
	record := Hours{}
	if err := c.ShouldBindJSON(&record); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}
	id, err := strconv.Atoi(c.Param("id"))
	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}
	record.ID = uint(id)
	util.DB.Save(&record)
	c.JSON(http.StatusOK, record)
}

func DeleteHours(c *gin.Context) {
	record := Hours{}
	id, err := strconv.Atoi(c.Param("id"))
	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}
	record.ID = uint(id)
	util.DB.Delete(&record)
	c.JSON(http.StatusOK, record)
}

// Workers
func AllWorkers(c *gin.Context) {
	records := []Worker{}
	if err := util.DB.Find(&records).Error; err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		return
	}
	c.JSON(http.StatusOK, records)
}

func GetWorker(c *gin.Context) {
	record := Worker{}
	if err := util.DB.First(&record, c.Param("id")).Error; err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		return
	}
	c.JSON(http.StatusOK, record)
}

func LookupWorker(c *gin.Context) {
	type WorkerLookup struct {
		Barcode string `json:"barcode"`
	}
	lookup := WorkerLookup{}
	if err := c.ShouldBindJSON(&lookup); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}
	hashed_a_num := hashUid(lookup.Barcode)
	record := Worker{}
	if err := util.DB.Where("Barcode = ?", hashed_a_num).First(&record).Error; err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		return
	}
	c.JSON(http.StatusOK, record)
}

func GetWorkerHours(c *gin.Context) {
	w := Worker{}
	if err := util.DB.First(&w, c.Param("id")).Error; err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		return
	}
	records := []Hours{}
	if err := util.DB.Find(&records, Hours{WorkerID: w.ID}).Error; err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		return
	}
	for _, h := range records {
		h.Worker = &w
	}
	c.JSON(http.StatusOK, records)
}

func AddWorker(c *gin.Context) {
	record := Worker{}
	if err := c.ShouldBindJSON(&record); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}
	if len(record.Barcode) > 0 {
		record.Barcode = hashUid(record.Barcode)
	} else {
		uid := uuid.New()
		record.Barcode = hashUid(base64.StdEncoding.EncodeToString(uid[:]))
	}
	util.DB.Create(&record)
	c.JSON(http.StatusOK, record)
}

func UpdateWorker(c *gin.Context) {
	record := Worker{}
	if err := c.ShouldBindJSON(&record); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}
	id, err := strconv.Atoi(c.Param("id"))
	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}
	record.ID = uint(id)
	util.DB.Save(&record)
	c.JSON(http.StatusOK, record)
}

func DeleteWorker(c *gin.Context) {
	record := Worker{}
	id, err := strconv.Atoi(c.Param("id"))
	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}
	record.ID = uint(id)
	util.DB.Delete(&record)
	c.JSON(http.StatusOK, record)
}

func AddTask(c *gin.Context) {
	record := Task{}
	if err := c.ShouldBindJSON(&record); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error:": err.Error()})
		return
	}
	for _, tag := range record.Tags {
		if err := util.DB.FirstOrCreate(&tag, util.Tag{Name: tag.Name}).Error; err != nil {
			c.JSON(http.StatusBadRequest, gin.H{"error:": err.Error()})
			return
		}
	}
	util.DB.Create(&record)
	c.JSON(http.StatusOK, record)
}

func GetTask(c *gin.Context) {
	record := Task{}
	if err := util.DB.Preload("Area").Preload("Tags").Preload("Planting").Preload("Planting.Crop").Preload("Planting.Crop.Tags").Preload("Planting.Bed").Preload("Planting.Bed.Area").Preload("Harvest").Preload("Harvest.Crop").Preload("Harvest.Crop.Tags").Preload("Harvest.Bed").Preload("Harvest.Bed.Area").Preload("Process").Preload("Process.Harvest").Preload("Process.Harvest.Crop").Preload("Process.Harvest.Crop.Tags").Preload("Process.Harvest.Bed").Preload("Process.Harvest.Bed.Area").Preload("Process.Product").First(&record, c.Param("id")).Error; err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}
	c.JSON(http.StatusOK, record)
}

func AllTasks(c *gin.Context) {
	records := []Task{}
	if err := util.DB.Preload("Area").Preload("Tags").Preload("Planting").Preload("Planting.Crop").Preload("Planting.Crop.Tags").Preload("Planting.Bed").Preload("Planting.Bed.Area").Preload("Harvest").Preload("Harvest.Crop").Preload("Harvest.Crop.Tags").Preload("Harvest.Bed").Preload("Harvest.Bed.Area").Preload("Process").Preload("Process.Harvest").Preload("Process.Harvest.Crop").Preload("Process.Harvest.Crop.Tags").Preload("Process.Harvest.Bed").Preload("Process.Harvest.Bed.Area").Preload("Process.Product").Find(&records).Error; err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}
	c.JSON(http.StatusOK, records)
}

func UpdateTask(c *gin.Context) {
	record := Task{}
	if err := c.ShouldBindJSON(&record); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}
	id, err := strconv.Atoi(c.Param("id"))
	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}
	record.ID = uint(id)
	util.DB.Save(&record)
	c.JSON(http.StatusOK, record)
}

func DeleteTask(c *gin.Context) {
	record := Task{}
	id, err := strconv.Atoi(c.Param("id"))
	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}
	record.ID = uint(id)
	util.DB.Delete(&record)
	c.JSON(http.StatusOK, record)
}
