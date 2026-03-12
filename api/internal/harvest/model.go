package harvest

import (
	"github.com/absentbird/TESC-Farm/internal/sales"
	"github.com/absentbird/TESC-Farm/internal/util"
	"gorm.io/gorm"
)

type Area struct {
	gorm.Model
	Name        string `json:"name"`
	Description string `json:"description"`
}

type Bed struct {
	gorm.Model
	Name   string `json:"name"`
	Area   *Area  `json:"area,omitempty"`
	AreaID uint   `json:"area_id"`
	Notes  string `json:"notes,omitempty"`
}

type Crop struct {
	gorm.Model
	Name    string      `json:"name"`
	Variety string      `json:"variety"`
	Notes   string      `json:"notes,omitempty"`
	Tags    []*util.Tag `json:"tags,omitempty" gorm:"many2many:crop_tags"`
}

type Planting struct {
	gorm.Model
	Crop   *Crop  `json:"crop,omitempty"`
	CropID uint   `json:"crop_id"`
	Bed    *Bed   `json:"bed,omitempty"`
	BedID  uint   `json:"bed_id"`
	Notes  string `json:"notes"`
}

type Harvest struct {
	gorm.Model
	Weight float64 `json:"weight"`
	Bin    string  `json:"bin"`
	Crop   *Crop   `json:"crop,omitempty"`
	CropID uint    `json:"crop_id"`
	Bed    *Bed    `json:"bed,omitempty"`
	BedID  uint    `json:"bed_id"`
}

type Process struct {
	gorm.Model
	Unit       string         `json:"unit"`
	Quantity   int            `json:"quantity"`
	Weight     float64        `json:"weight"`
	Cull       float64        `json:"cull"`
	StudentUse float64        `json:"student_use"`
	ValueAdded float64        `json:"value_added"`
	Harvest    *Harvest       `json:"harvest,omitempty"`
	HarvestID  uint           `json:"harvest_id"`
	Product    *sales.Product `json:"product,omitempty"`
	ProductID  uint           `json:"product_id"`
}

type Postharvest struct {
	gorm.Model
	Harvest   *Harvest `json:"harvest,omitempty"`
	HarvestID uint     `json:"harvest_id"`
}
