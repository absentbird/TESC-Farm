package main

import (
	"github.com/absentbird/TESC-Farm/internal/harvest"
	"github.com/absentbird/TESC-Farm/internal/labor"
	"github.com/absentbird/TESC-Farm/internal/sales"
	"github.com/absentbird/TESC-Farm/internal/util"
	"github.com/absentbird/TESC-Farm/internal/authentication"
	"github.com/absentbird/TESC-Farm/internal/util/db"
	"github.com/gin-gonic/gin"
)

const (
	PRODCONFIG = "configs/config.yaml"
	DEVCONFIG  = "configs/config-dev.yaml"
)

func main() {
	// Initialize the config, database, and router
	conf := util.Config{}
	conf.Load(PRODCONFIG, DEVCONFIG)
	util.DB = db.ConnectDB(conf.DBConn)
	if conf.Mode == "production" {
		gin.SetMode(gin.ReleaseMode)
	}
	r := gin.Default()

	// Labor endpoints
	r.GET("/hours", labor.AllHours)
	r.GET("/hours/harvesting", labor.HarvestingHours)
	r.GET("/hours/processing", labor.ProcessingHours)
	r.GET("/hours/:id", labor.GetHours)
	r.POST("/hours/new", labor.AddHours)
	r.POST("/hours/:id/update", labor.UpdateHours)
	r.POST("/hours/:id/delete", labor.DeleteHours)
	r.GET("/workers", labor.AllWorkers)
	r.GET("/worker/:id", labor.GetWorker)
	r.GET("/worker/:id/hours", labor.GetWorkerHours)
	r.POST("/worker/new", labor.AddWorker)
	r.POST("/worker/:id/update", labor.UpdateWorker)
	r.POST("/worker/:id/delete", labor.DeleteWorker)

	// Harvest endpoints
	r.GET("/crops", harvest.AllCrops)
	r.GET("/crop/:id", harvest.GetCrop)
	r.GET("/crop/:id/harvests", harvest.GetCropHarvests)
	r.GET("/crop/:id/processing", harvest.GetCropProcessing)
	r.POST("/crop/new", harvest.AddCrop)
	r.POST("/crop/:id/update", harvest.UpdateCrop)
	r.POST("/crop/:id/delete", harvest.DeleteCrop)
	r.GET("/harvests", harvest.AllHarvests)
	r.GET("/harvest/:id", harvest.GetHarvest)
	r.GET("/harvest/:id/processing", harvest.GetHarvestProcessing)
	r.POST("/harvest/new", harvest.AddHarvest)
	r.POST("/harvest/:id/update", harvest.UpdateHarvest)
	r.POST("/harvest/:id/delete", harvest.DeleteHarvest)
	r.GET("/processing", harvest.AllProcessing)
	r.GET("/process/:id", harvest.GetProcessing)
	r.POST("/process/new", harvest.AddProcessing)
	r.POST("/process/:id/update", harvest.UpdateProcessing)
	r.POST("/process/:id/delete", harvest.DeleteProcessing)
	r.GET("/bin/:bin/harvest", harvest.GetBinHarvest)

	// Sales Endpoints
	r.GET("/products", sales.AllProducts)
	r.GET("/product/:id", sales.GetProduct)
	r.GET("/product/:id/sales", sales.GetProductSales)
	r.POST("/product/new", sales.AddProduct)
	r.POST("/product/:id/update", sales.UpdateProduct)
	r.POST("/product/:id/delete", sales.DeleteProduct)
	r.GET("/sales", sales.AllSales)
	r.GET("/sale/:id", sales.GetSale)
	r.POST("/sale/new", sales.AddSale)
	r.POST("/sale/:id/update", sales.UpdateSale)
	r.POST("/sale/:id/delete", sales.DeleteSale)

	err := r.Run("127.0.0.1:" + conf.Port)
	util.Check(err, "Error starting API")
}
