package util

import (
	"io/ioutil"
	"log"
	"os"

	"gopkg.in/yaml.v3"
	"gorm.io/gorm"
)

type Config struct {
	Mode   string
	Salt   []byte
	Host   string `yaml:"Host"`
	Port   string `yaml:"Internal_Port"`
	DBConn string `yaml:"Database_Connection"`
	WToken string `yaml:"Worker_Token"`
	WHash  string `yaml:"Worker_Hash"`
	AToken string `yaml:"Admin_Token"`
	AHash  string `yaml:"Admin_Hash"`
}

func (s *Config) Load(prodconf string, devconf string) {
	s.Salt = []byte("sea-salt")
	configfile := devconf
	if dev, _ := os.LookupEnv("PRODUCTION"); dev != "" {
		configfile = prodconf
		s.Mode = "production"
		if s.Host == "" {
			s.Host = "127.0.0.1"
		}
		log.Println("Running in production mode.")
	} else {
		s.Mode = "development"
		if s.Host == "" {
			s.Host = "0.0.0.0"
		}
		log.Println("Running in development mode.")
	}
	content, err := ioutil.ReadFile(configfile)
	Check(err, "Error reading config file")
	if s.Mode == "production" {
		content = []byte(os.ExpandEnv(string(content)))
	}
	err = yaml.Unmarshal(content, &s)
	Check(err, "Error parsing configuration")
}

type Tag struct {
	gorm.Model
	Name string `json:"name"`
}
