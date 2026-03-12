package util

import (
	"log"

	"gorm.io/gorm"
)

var (
	DB          *gorm.DB
	WorkerToken string
	WorkerHash  string
	AdminToken  string
	AdminHash   string
)

// Create a shorthand function to check for errors
func Check(e error, m string) {
	if e != nil {
		log.Panic(m+": ", e.Error())
	}
}
