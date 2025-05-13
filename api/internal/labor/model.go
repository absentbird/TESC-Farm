package labor

import (
	"github.com/absentbird/TESC-Farm/internal/harvest"
	"github.com/absentbird/TESC-Farm/internal/util"
	"gorm.io/gorm"
	"time"
)

type Worker struct {
	gorm.Model
	Barcode string `json:"barcode"`
}

type Hours struct {
	gorm.Model
	Start      time.Time `json:"start"`
	Duration   float64   `json:"duration"`
	Department string    `json:"department,omitempty"`
	Task       *Task     `json:"task,omitempty"`
	TaskID     uint      `json:"task_id"`
	Worker     *Worker   `json:"worker,omitempty"`
	WorkerID   uint      `json:"worker_id"`
	Notes      string    `json:"notes"`
}

type Task struct {
	gorm.Model
	Name          string               `json:"name"`
	Description   string               `json:"description"`
	Type          string               `json:"type"`
	Barcode       string               `json:"barcode"`
	Area          *harvest.Area        `json:"area,omitempty"`
	AreaID        uint                 `json:"area_id"`
	Planting      *harvest.Planting    `json:"planting,omitempty"`
	PlantingID    uint                 `json:"planting_id,omitempty"`
	Harvest       *harvest.Harvest     `json:"harvest,omitempty"`
	HarvestID     uint                 `json:"harvest_id,omitempty"`
	Process       *harvest.Process     `json:"process,omitempty"`
	ProcessID     uint                 `json:"process_id,omitempty"`
	Postharvest   *harvest.Postharvest `json:"postharvest,omitempty"`
	PostharvestID uint                 `json:"postharvest_id,omitempty"`
	Tags          []*util.Tag          `json:"tags,omitempty" gorm:"many2many:task_tags"`
}
