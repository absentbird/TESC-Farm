package labor

import (
	"crypto/sha256"
	"encoding/base64"
	"net/http"
	"strconv"
	"time"

	"github.com/absentbird/TESC-Farm/internal/harvest"
	"github.com/absentbird/TESC-Farm/internal/util"
	"github.com/gin-gonic/gin"
	"gorm.io/gorm"
)

func hashANum(anum string) string {
	bytenum := []byte(anum)
	hash := sha256.New()
	hash.Write(bytenum)
	return base64.StdEncoding.EncodeToString(hash.Sum(nil))
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
	anum := hashANum(punch.Barcode)
	last := Hours{}
	newWorker := false
	if err := util.DB.InnerJoins("Worker", util.DB.Where(&Worker{Barcode: anum})).Order("Start desc").First(&last).Error; err != nil {
		if err == gorm.ErrRecordNotFound {
			worker := Worker{}
			worker.Barcode = anum
			util.DB.Create(&worker)
			last.WorkerID = worker.ID
			newWorker = true
		} else {
			c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
			return
		}
	}
	if last.Duration == 0 && !newWorker {
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

func PunchOutAll(c *gin.Context) {
	status, _ := c.Get("username")
	if status != "admin" {
		c.JSON(http.StatusUnauthorized, gin.H{"error": "Insufficient permissions"})
		return
	}
	records := []Hours{}
	if err := util.DB.Preload("Worker").Preload("Task").Preload("Task.Area").Preload("Task.Tags").Preload("Task.Planting").Preload("Task.Planting.Crop").Preload("Task.Planting.Bed").Preload("Task.Planting.Bed.Area").Preload("Task.Harvest").Preload("Task.Harvest.Crop").Preload("Task.Harvest.Bed").Preload("Task.Harvest.Bed.Area").Preload("Task.Process").Preload("Task.Process.Harvest").Preload("Task.Process.Harvest.Crop").Preload("Task.Process.Harvest.Bed").Preload("Task.Process.Harvest.Bed.Area").Preload("Task.Process.Product").Where("Duration = ?", 0).Find(&records).Error; err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		return
	}
	for _, w := range records {
		w.Duration = time.Now().Sub(w.Start).Hours()
		util.DB.Save(&w)
	}
	c.JSON(http.StatusOK, records)
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
	hashed_a_num := hashANum(lookup.Barcode)
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
	//Hashes A number
	hashed_a_num := hashANum(record.Barcode)
	record.Barcode = hashed_a_num
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
	type NewTask struct {
		Task
		CropID uint `json:"crop_id,omitempty"`
	}
	record := NewTask{}
	if err := c.ShouldBindJSON(&record); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error:": err.Error()})
		return
	}
	task := record.Task
	if record.CropID != 0 {
		switch record.TypeID {
		case 2: //harvest
			h := harvest.Harvest{}
			if err := util.DB.Preload("Bed").Order("created_at desc").FirstOrCreate(&h, harvest.Harvest{CropID: record.CropID, Bed: &harvest.Bed{AreaID: record.AreaID}}).Error; err != nil {
				c.JSON(http.StatusBadRequest, gin.H{"error:": err.Error()})
				return
			}
			task.HarvestID = h.ID
		case 1: //preharvest
			ph := harvest.Planting{}
			if err := util.DB.Preload("Bed").Order("created_at desc").FirstOrCreate(&ph, harvest.Planting{CropID: record.CropID, Bed: &harvest.Bed{AreaID: record.AreaID}}).Error; err != nil {
				c.JSON(http.StatusBadRequest, gin.H{"error:": err.Error()})
				return
			}
			task.PlantingID = ph.ID
		default:
			c.JSON(http.StatusBadRequest, gin.H{"error:": "Invalid task type"})
		}
	}
	for _, tag := range task.Tags {
		if err := util.DB.FirstOrCreate(&tag, util.Tag{Name: tag.Name}).Error; err != nil {
			c.JSON(http.StatusBadRequest, gin.H{"error:": err.Error()})
			return
		}
	}
	util.DB.Create(&task)
	c.JSON(http.StatusOK, task)
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

func AllTaskTypes(c *gin.Context) {
	records := []TaskType{}
	if err := util.DB.Find(&records).Error; err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}
	c.JSON(http.StatusOK, records)
}

func AddTaskType(c *gin.Context) {
	record := TaskType{}
	if err := c.ShouldBindJSON(&record); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}
	util.DB.Create(&record)
	c.JSON(http.StatusOK, record)
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
