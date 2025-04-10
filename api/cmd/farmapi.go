package main

import (
	"github.com/absentbird/TESC-Farm/internal/harvest"
	"github.com/absentbird/TESC-Farm/internal/labor"
	"github.com/absentbird/TESC-Farm/internal/sales"
	"github.com/absentbird/TESC-Farm/internal/util"
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
	util.WorkerToken = conf.WToken
	util.WorkerHash = conf.WHash
	if conf.Mode == "production" {
		gin.SetMode(gin.ReleaseMode)
	}
	r := gin.Default()

	// Session endpoints
	r.POST("/login", util.Login)
	r.GET("/logout", util.Logout)

	// Group for authorized endpoints
	auth := r.Group("/")
	auth.Use(util.AuthMiddleware())

	// Labor endpoints
	r.GET("/hours", labor.AllHours)
	r.GET("/hours/:id", labor.GetHours)
	r.GET("/hours/working", labor.GetWorking)
	auth.POST("/hours/:id/update", labor.UpdateHours)
	auth.POST("/hours/:id/delete", labor.DeleteHours)
	auth.POST("/hours/new", labor.AddHours)
	auth.POST("/hours/punch", labor.AddPunch)
	r.GET("/tasks", labor.AllTasks)
	r.GET("/task/:id", labor.GetTask)
	auth.POST("/task/:id/update", labor.UpdateTask)
	auth.POST("/task/:id/delete", labor.DeleteTask)
	auth.POST("/task/new", labor.AddTask)
	r.GET("/workers", labor.AllWorkers)
	r.GET("/worker/:id", labor.GetWorker)
	r.GET("/worker/:id/hours", labor.GetWorkerHours)
	auth.POST("/worker/lookup", labor.LookupWorker)
	auth.POST("/worker/:id/update", labor.UpdateWorker)
	auth.POST("/worker/:id/delete", labor.DeleteWorker)
	auth.POST("/worker/new", labor.AddWorker)

	// Harvest endpoints
	r.GET("/areas", harvest.AllAreas)
	r.GET("/areas/:id", harvest.GetArea)
	r.GET("/beds", harvest.AllBeds)
	r.GET("/beds/:id", harvest.GetBed)
	r.GET("/crops", harvest.AllCrops)
	r.GET("/crop/:id", harvest.GetCrop)
	r.GET("/crop/:id/plantings", harvest.GetCropPlantings)
	r.GET("/crop/:id/harvests", harvest.GetCropHarvests)
	r.GET("/crop/:id/processing", harvest.GetCropProcessing)
	auth.POST("/crop/:id/update", harvest.UpdateCrop)
	auth.POST("/crop/:id/delete", harvest.DeleteCrop)
	auth.POST("/crop/new", harvest.AddCrop)
	r.GET("/plantings", harvest.AllPlantings)
	r.GET("/planting/:id", harvest.GetPlanting)
	auth.POST("/planting/:id/update", harvest.UpdatePlanting)
	auth.POST("/planting/:id/delete", harvest.DeletePlanting)
	auth.POST("/planting/new", harvest.AddPlanting)
	r.GET("/harvests", harvest.AllHarvests)
	r.GET("/harvest/:id", harvest.GetHarvest)
	r.GET("/harvest/:id/processing", harvest.GetHarvestProcessing)
	auth.POST("/harvest/:id/update", harvest.UpdateHarvest)
	auth.POST("/harvest/:id/delete", harvest.DeleteHarvest)
	auth.POST("/harvest/new", harvest.AddHarvest)
	r.GET("/processing", harvest.AllProcessing)
	r.GET("/process/:id", harvest.GetProcessing)
	auth.POST("/process/:id/update", harvest.UpdateProcessing)
	auth.POST("/process/:id/delete", harvest.DeleteProcessing)
	auth.POST("/process/new", harvest.AddProcessing)
	r.GET("/bin/:bin/harvest", harvest.GetBinHarvest)

	// Sales Endpoints
	r.GET("/products", sales.AllProducts)
	r.GET("/product/:id", sales.GetProduct)
	r.GET("/product/:id/sales", sales.GetProductSales)
	auth.POST("/product/:id/update", sales.UpdateProduct)
	auth.POST("/product/:id/delete", sales.DeleteProduct)
	auth.POST("/product/new", sales.AddProduct)
	r.GET("/sales", sales.AllSales)
	r.GET("/sale/:id", sales.GetSale)
	auth.POST("/sale/:id/update", sales.UpdateSale)
	auth.POST("/sale/:id/delete", sales.DeleteSale)
	auth.POST("/sale/new", sales.AddSale)

	err := r.Run(conf.Host + ":" + conf.Port)
	util.Check(err, "Error starting API")
}
