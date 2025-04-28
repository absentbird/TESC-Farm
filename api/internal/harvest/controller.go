package harvest

import (
	"github.com/absentbird/TESC-Farm/internal/util"
	"github.com/gin-gonic/gin"
	"net/http"
	"strconv"
)

// AllAreas godoc
// @Summary      Lists all areas
// @Description  Returns list of all area objects
// @Tags         harvest
// @Accept       json
// @Produce      json
// @Param        Name  Description Use
// @Success      200  {object}  model.Account
// @Failure      400  {object}  httputil.HTTPError
// @Failure      404  {object}  httputil.HTTPError
// @Failure      500  {object}  httputil.HTTPError
// @Router       
// Areas
func AllAreas(c *gin.Context) {
	records := []Area{}
	if err := util.DB.Find(&records).Error; err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		return
	}
	c.JSON(http.StatusOK, records)
}

// GetArea godoc
// @Summary      Searches for an area by ID and returns it.
// @Description  Returns Area object by ID.
// @Tags         harvest
// @Accept       json
// @Produce      json
// @Param        Name Description Use
// @Success      200  {object}  model.Account
// @Failure      400  {object}  httputil.HTTPError
// @Failure      404  {object}  httputil.HTTPError
// @Failure      500  {object}  httputil.HTTPError
// @Router       
func GetArea(c *gin.Context) {
	record := Area{}
	if err := util.DB.First(&record, c.Param("id")).Error; err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		return
	}
	c.JSON(http.StatusOK, record)
}

// PLACEHOLDER godoc
// @Summary      Show an account
// @Description  get string by ID
// @Tags         accounts
// @Accept       json
// @Produce      json
// @Param        id   path      int  true  "Account ID"
// @Success      200  {object}  model.Account
// @Failure      400  {object}  httputil.HTTPError
// @Failure      404  {object}  httputil.HTTPError
// @Failure      500  {object}  httputil.HTTPError
// @Router       /accounts/{id} [get]
// Beds
func AllBeds(c *gin.Context) {
	records := []Bed{}
	if err := util.DB.Find(&records).Error; err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		return
	}
	c.JSON(http.StatusOK, records)
}

// ShowAccount godoc
// @Summary      Show an account
// @Description  get string by ID
// @Tags         accounts
// @Accept       json
// @Produce      json
// @Param        id   path      int  true  "Account ID"
// @Success      200  {object}  model.Account
// @Failure      400  {object}  httputil.HTTPError
// @Failure      404  {object}  httputil.HTTPError
// @Failure      500  {object}  httputil.HTTPError
// @Router       /accounts/{id} [get]
func GetBed(c *gin.Context) {
	record := Bed{}
	if err := util.DB.First(&record, c.Param("id")).Error; err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		return
	}
	c.JSON(http.StatusOK, record)
}

// ShowAccount godoc
// @Summary      Show an account
// @Description  get string by ID
// @Tags         accounts
// @Accept       json
// @Produce      json
// @Param        id   path      int  true  "Account ID"
// @Success      200  {object}  model.Account
// @Failure      400  {object}  httputil.HTTPError
// @Failure      404  {object}  httputil.HTTPError
// @Failure      500  {object}  httputil.HTTPError
// @Router       /accounts/{id} [get]
// Crops
func AllCrops(c *gin.Context) {
	records := []Crop{}
	if err := util.DB.Find(&records).Error; err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		return
	}
	c.JSON(http.StatusOK, records)
}

// ShowAccount godoc
// @Summary      Show an account
// @Description  get string by ID
// @Tags         accounts
// @Accept       json
// @Produce      json
// @Param        id   path      int  true  "Account ID"
// @Success      200  {object}  model.Account
// @Failure      400  {object}  httputil.HTTPError
// @Failure      404  {object}  httputil.HTTPError
// @Failure      500  {object}  httputil.HTTPError
// @Router       /accounts/{id} [get]
func GetCrop(c *gin.Context) {
	record := Crop{}
	if err := util.DB.First(&record, c.Param("id")).Error; err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		return
	}
	c.JSON(http.StatusOK, record)
}

// ShowAccount godoc
// @Summary      Show an account
// @Description  get string by ID
// @Tags         accounts
// @Accept       json
// @Produce      json
// @Param        id   path      int  true  "Account ID"
// @Success      200  {object}  model.Account
// @Failure      400  {object}  httputil.HTTPError
// @Failure      404  {object}  httputil.HTTPError
// @Failure      500  {object}  httputil.HTTPError
// @Router       /accounts/{id} [get]
func GetCropPlantings(c *gin.Context) {
	crop := Crop{}
	if err := util.DB.First(&crop, c.Param("id")).Error; err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		return
	}
	records := []Planting{}
	if err := util.DB.Preload("Bed").Preload("Bed.Area").Find(&records, Planting{CropID: crop.ID}).Error; err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		return
	}
	for _, r := range records {
		r.Crop = &crop
	}
	c.JSON(http.StatusOK, records)
}

// ShowAccount godoc
// @Summary      Show an account
// @Description  get string by ID
// @Tags         accounts
// @Accept       json
// @Produce      json
// @Param        id   path      int  true  "Account ID"
// @Success      200  {object}  model.Account
// @Failure      400  {object}  httputil.HTTPError
// @Failure      404  {object}  httputil.HTTPError
// @Failure      500  {object}  httputil.HTTPError
// @Router       /accounts/{id} [get]
func GetCropHarvests(c *gin.Context) {
	crop := Crop{}
	if err := util.DB.First(&crop, c.Param("id")).Error; err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		return
	}
	records := []Harvest{}
	if err := util.DB.Preload("Bed").Preload("Bed.Area").Find(&records, Harvest{CropID: crop.ID}).Error; err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		return
	}
	for _, r := range records {
		r.Crop = &crop
	}
	c.JSON(http.StatusOK, records)
}

// ShowAccount godoc
// @Summary      Show an account
// @Description  get string by ID
// @Tags         accounts
// @Accept       json
// @Produce      json
// @Param        id   path      int  true  "Account ID"
// @Success      200  {object}  model.Account
// @Failure      400  {object}  httputil.HTTPError
// @Failure      404  {object}  httputil.HTTPError
// @Failure      500  {object}  httputil.HTTPError
// @Router       /accounts/{id} [get]
func GetCropProcessing(c *gin.Context) {
	crop := Crop{}
	if err := util.DB.First(&crop, c.Param("id")).Error; err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		return
	}
	records := []Process{}
	if err := util.DB.Joins("Harvest").Find(&records, Process{Harvest: &Harvest{CropID: crop.ID}}).Error; err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		return
	}
	for _, r := range records {
		r.Harvest.Crop = &crop
	}
	c.JSON(http.StatusOK, records)
}

// ShowAccount godoc
// @Summary      Show an account
// @Description  get string by ID
// @Tags         accounts
// @Accept       json
// @Produce      json
// @Param        id   path      int  true  "Account ID"
// @Success      200  {object}  model.Account
// @Failure      400  {object}  httputil.HTTPError
// @Failure      404  {object}  httputil.HTTPError
// @Failure      500  {object}  httputil.HTTPError
// @Router       /accounts/{id} [get]
func AddCrop(c *gin.Context) {
	record := Crop{}
	if err := c.ShouldBindJSON(&record); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
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

// ShowAccount godoc
// @Summary      Show an account
// @Description  get string by ID
// @Tags         accounts
// @Accept       json
// @Produce      json
// @Param        id   path      int  true  "Account ID"
// @Success      200  {object}  model.Account
// @Failure      400  {object}  httputil.HTTPError
// @Failure      404  {object}  httputil.HTTPError
// @Failure      500  {object}  httputil.HTTPError
// @Router       /accounts/{id} [get]
func UpdateCrop(c *gin.Context) {
	record := Crop{}
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

// ShowAccount godoc
// @Summary      Show an account
// @Description  get string by ID
// @Tags         accounts
// @Accept       json
// @Produce      json
// @Param        id   path      int  true  "Account ID"
// @Success      200  {object}  model.Account
// @Failure      400  {object}  httputil.HTTPError
// @Failure      404  {object}  httputil.HTTPError
// @Failure      500  {object}  httputil.HTTPError
// @Router       /accounts/{id} [get]
func DeleteCrop(c *gin.Context) {
	record := Crop{}
	id, err := strconv.Atoi(c.Param("id"))
	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}
	record.ID = uint(id)
	util.DB.Delete(&record)
	c.JSON(http.StatusOK, record)
}

// ShowAccount godoc
// @Summary      Show an account
// @Description  get string by ID
// @Tags         accounts
// @Accept       json
// @Produce      json
// @Param        id   path      int  true  "Account ID"
// @Success      200  {object}  model.Account
// @Failure      400  {object}  httputil.HTTPError
// @Failure      404  {object}  httputil.HTTPError
// @Failure      500  {object}  httputil.HTTPError
// @Router       /accounts/{id} [get]
// Plantings
func AllPlantings(c *gin.Context) {
	records := []Planting{}
	if err := util.DB.Find(&records).Error; err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		return
	}
	c.JSON(http.StatusOK, records)
}

// ShowAccount godoc
// @Summary      Show an account
// @Description  get string by ID
// @Tags         accounts
// @Accept       json
// @Produce      json
// @Param        id   path      int  true  "Account ID"
// @Success      200  {object}  model.Account
// @Failure      400  {object}  httputil.HTTPError
// @Failure      404  {object}  httputil.HTTPError
// @Failure      500  {object}  httputil.HTTPError
// @Router       /accounts/{id} [get]
func GetPlanting(c *gin.Context) {
	record := Planting{}
	if err := util.DB.First(&record, c.Param("id")).Error; err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		return
	}
	c.JSON(http.StatusOK, record)
}

// ShowAccount godoc
// @Summary      Show an account
// @Description  get string by ID
// @Tags         accounts
// @Accept       json
// @Produce      json
// @Param        id   path      int  true  "Account ID"
// @Success      200  {object}  model.Account
// @Failure      400  {object}  httputil.HTTPError
// @Failure      404  {object}  httputil.HTTPError
// @Failure      500  {object}  httputil.HTTPError
// @Router       /accounts/{id} [get]
func AddPlanting(c *gin.Context) {
	record := Planting{}
	if err := c.ShouldBindJSON(&record); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}
	util.DB.Create(&record)
	c.JSON(http.StatusOK, record)
}

// ShowAccount godoc
// @Summary      Show an account
// @Description  get string by ID
// @Tags         accounts
// @Accept       json
// @Produce      json
// @Param        id   path      int  true  "Account ID"
// @Success      200  {object}  model.Account
// @Failure      400  {object}  httputil.HTTPError
// @Failure      404  {object}  httputil.HTTPError
// @Failure      500  {object}  httputil.HTTPError
// @Router       /accounts/{id} [get]
func UpdatePlanting(c *gin.Context) {
	record := Planting{}
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

// ShowAccount godoc
// @Summary      Show an account
// @Description  get string by ID
// @Tags         accounts
// @Accept       json
// @Produce      json
// @Param        id   path      int  true  "Account ID"
// @Success      200  {object}  model.Account
// @Failure      400  {object}  httputil.HTTPError
// @Failure      404  {object}  httputil.HTTPError
// @Failure      500  {object}  httputil.HTTPError
// @Router       /accounts/{id} [get]
func DeletePlanting(c *gin.Context) {
	record := Planting{}
	id, err := strconv.Atoi(c.Param("id"))
	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}
	record.ID = uint(id)
	util.DB.Delete(&record)
	c.JSON(http.StatusOK, record)
}

// ShowAccount godoc
// @Summary      Show an account
// @Description  get string by ID
// @Tags         accounts
// @Accept       json
// @Produce      json
// @Param        id   path      int  true  "Account ID"
// @Success      200  {object}  model.Account
// @Failure      400  {object}  httputil.HTTPError
// @Failure      404  {object}  httputil.HTTPError
// @Failure      500  {object}  httputil.HTTPError
// @Router       /accounts/{id} [get]
// Harvests
func AllHarvests(c *gin.Context) {
	records := []Harvest{}
	if err := util.DB.Find(&records).Error; err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		return
	}
	c.JSON(http.StatusOK, records)
}

// ShowAccount godoc
// @Summary      Show an account
// @Description  get string by ID
// @Tags         accounts
// @Accept       json
// @Produce      json
// @Param        id   path      int  true  "Account ID"
// @Success      200  {object}  model.Account
// @Failure      400  {object}  httputil.HTTPError
// @Failure      404  {object}  httputil.HTTPError
// @Failure      500  {object}  httputil.HTTPError
// @Router       /accounts/{id} [get]
func GetHarvest(c *gin.Context) {
	record := Harvest{}
	if err := util.DB.First(&record, c.Param("id")).Error; err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		return
	}
	c.JSON(http.StatusOK, record)
}

// ShowAccount godoc
// @Summary      Show an account
// @Description  get string by ID
// @Tags         accounts
// @Accept       json
// @Produce      json
// @Param        id   path      int  true  "Account ID"
// @Success      200  {object}  model.Account
// @Failure      400  {object}  httputil.HTTPError
// @Failure      404  {object}  httputil.HTTPError
// @Failure      500  {object}  httputil.HTTPError
// @Router       /accounts/{id} [get]
func GetHarvestProcessing(c *gin.Context) {
	h := Harvest{}
	if err := util.DB.First(&h, c.Param("id")).Error; err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		return
	}
	records := []Process{}
	if err := util.DB.Find(&records, Process{HarvestID: h.ID}).Error; err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		return
	}
	c.JSON(http.StatusOK, records)
}
// ShowAccount godoc
// @Summary      Show an account
// @Description  get string by ID
// @Tags         accounts
// @Accept       json
// @Produce      json
// @Param        id   path      int  true  "Account ID"
// @Success      200  {object}  model.Account
// @Failure      400  {object}  httputil.HTTPError
// @Failure      404  {object}  httputil.HTTPError
// @Failure      500  {object}  httputil.HTTPError
// @Router       /accounts/{id} [get]
func AddHarvest(c *gin.Context) {
	record := Harvest{}
	if err := c.ShouldBindJSON(&record); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}
	util.DB.Create(&record)
	c.JSON(http.StatusOK, record)
}

// ShowAccount godoc
// @Summary      Show an account
// @Description  get string by ID
// @Tags         accounts
// @Accept       json
// @Produce      json
// @Param        id   path      int  true  "Account ID"
// @Success      200  {object}  model.Account
// @Failure      400  {object}  httputil.HTTPError
// @Failure      404  {object}  httputil.HTTPError
// @Failure      500  {object}  httputil.HTTPError
// @Router       /accounts/{id} [get]
func UpdateHarvest(c *gin.Context) {
	record := Harvest{}
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

// ShowAccount godoc
// @Summary      Show an account
// @Description  get string by ID
// @Tags         accounts
// @Accept       json
// @Produce      json
// @Param        id   path      int  true  "Account ID"
// @Success      200  {object}  model.Account
// @Failure      400  {object}  httputil.HTTPError
// @Failure      404  {object}  httputil.HTTPError
// @Failure      500  {object}  httputil.HTTPError
// @Router       /accounts/{id} [get]
func DeleteHarvest(c *gin.Context) {
	record := Harvest{}
	id, err := strconv.Atoi(c.Param("id"))
	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}
	record.ID = uint(id)
	util.DB.Delete(&record)
	c.JSON(http.StatusOK, record)
}

// ShowAccount godoc
// @Summary      Show an account
// @Description  get string by ID
// @Tags         accounts
// @Accept       json
// @Produce      json
// @Param        id   path      int  true  "Account ID"
// @Success      200  {object}  model.Account
// @Failure      400  {object}  httputil.HTTPError
// @Failure      404  {object}  httputil.HTTPError
// @Failure      500  {object}  httputil.HTTPError
// @Router       /accounts/{id} [get]
// Processing
func AllProcessing(c *gin.Context) {
	records := []Process{}
	if err := util.DB.Preload("Product").Preload("Harvest").Preload("Harvest.Crop").Find(&records).Error; err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		return
	}
	c.JSON(http.StatusOK, records)
}

// ShowAccount godoc
// @Summary      Show an account
// @Description  get string by ID
// @Tags         accounts
// @Accept       json
// @Produce      json
// @Param        id   path      int  true  "Account ID"
// @Success      200  {object}  model.Account
// @Failure      400  {object}  httputil.HTTPError
// @Failure      404  {object}  httputil.HTTPError
// @Failure      500  {object}  httputil.HTTPError
// @Router       /accounts/{id} [get]
func GetProcessing(c *gin.Context) {
	record := Process{}
	if err := util.DB.First(&record, c.Param("id")).Error; err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		return
	}
	c.JSON(http.StatusOK, record)
}

// ShowAccount godoc
// @Summary      Show an account
// @Description  get string by ID
// @Tags         accounts
// @Accept       json
// @Produce      json
// @Param        id   path      int  true  "Account ID"
// @Success      200  {object}  model.Account
// @Failure      400  {object}  httputil.HTTPError
// @Failure      404  {object}  httputil.HTTPError
// @Failure      500  {object}  httputil.HTTPError
// @Router       /accounts/{id} [get]
func AddProcessing(c *gin.Context) {
	record := Process{}
	if err := c.ShouldBindJSON(&record); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}
	util.DB.Create(&record)
	c.JSON(http.StatusOK, record)
}

// ShowAccount godoc
// @Summary      Show an account
// @Description  get string by ID
// @Tags         accounts
// @Accept       json
// @Produce      json
// @Param        id   path      int  true  "Account ID"
// @Success      200  {object}  model.Account
// @Failure      400  {object}  httputil.HTTPError
// @Failure      404  {object}  httputil.HTTPError
// @Failure      500  {object}  httputil.HTTPError
// @Router       /accounts/{id} [get]
func UpdateProcessing(c *gin.Context) {
	record := Process{}
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

// ShowAccount godoc
// @Summary      Show an account
// @Description  get string by ID
// @Tags         accounts
// @Accept       json
// @Produce      json
// @Param        id   path      int  true  "Account ID"
// @Success      200  {object}  model.Account
// @Failure      400  {object}  httputil.HTTPError
// @Failure      404  {object}  httputil.HTTPError
// @Failure      500  {object}  httputil.HTTPError
// @Router       /accounts/{id} [get]
func DeleteProcessing(c *gin.Context) {
	record := Process{}
	id, err := strconv.Atoi(c.Param("id"))
	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}
	record.ID = uint(id)
	util.DB.Delete(&record)
	c.JSON(http.StatusOK, record)
}

// ShowAccount godoc
// @Summary      Show an account
// @Description  get string by ID
// @Tags         accounts
// @Accept       json
// @Produce      json
// @Param        id   path      int  true  "Account ID"
// @Success      200  {object}  model.Account
// @Failure      400  {object}  httputil.HTTPError
// @Failure      404  {object}  httputil.HTTPError
// @Failure      500  {object}  httputil.HTTPError
// @Router       /accounts/{id} [get]
func GetBinHarvest(c *gin.Context) {
	records := []Harvest{}
	if err := util.DB.Order("created_at desc").First(&records, Harvest{Bin: c.Param("bin")}).Error; err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		return
	}
	c.JSON(http.StatusOK, records)
}
