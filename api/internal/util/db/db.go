package db

import (
	"github.com/absentbird/TESC-Farm/internal/harvest"
	"github.com/absentbird/TESC-Farm/internal/labor"
	"github.com/absentbird/TESC-Farm/internal/sales"
	"github.com/absentbird/TESC-Farm/internal/util"
	"gorm.io/driver/sqlite"
	"gorm.io/gorm"
)

func ConnectDB(dbconn string) *gorm.DB {
	database, err := gorm.Open(sqlite.Open(dbconn), &gorm.Config{})
	util.Check(err, "Database connection error")

	err = database.AutoMigrate(&labor.Hours{})
	util.Check(err, "Hours migration error")

	err = database.AutoMigrate(&labor.Task{})
	util.Check(err, "Task migration error")

	err = database.AutoMigrate(&labor.Worker{})
	util.Check(err, "Worker migration error")

	err = database.AutoMigrate(&labor.Team{})
	util.Check(err, "Worker migration error")

	err = database.AutoMigrate(&harvest.Area{})
	util.Check(err, "Area migration error")

	err = database.AutoMigrate(&harvest.Bed{})
	util.Check(err, "Area migration error")

	err = database.AutoMigrate(&harvest.Crop{})
	util.Check(err, "Crop migration error")

	err = database.AutoMigrate(&harvest.Planting{})
	util.Check(err, "Planting migration error")

	err = database.AutoMigrate(&harvest.Harvest{})
	util.Check(err, "Harvest migration error")

	err = database.AutoMigrate(&harvest.Process{})
	util.Check(err, "Process migration error")

	err = database.AutoMigrate(&sales.Product{})
	util.Check(err, "Product migration error")

	err = database.AutoMigrate(&sales.Sale{})
	util.Check(err, "Sales migration error")

	// Set global database variable
	return database
}
