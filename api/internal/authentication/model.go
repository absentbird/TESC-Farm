package authentication

import (
	"github.com/absentbird/TESC-Farm/internal/sales"
	"gorm.io/gorm"
	"time"
)

type Users struct {
	gorm.Model
	UserName   string `json:"username"`
	Password   string `json:"password"`
	Email      string `json:"email"`
}

type Token struct {
	gorm.Model
	Token		string  	 `json:"token"`
	User_id 	int			 `json:"user_id"`
	Created_at  time.Time    `json:"created_at"`
	Active_for 	int  		 `json"active_for"`
}

