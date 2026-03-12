package util

import (
	"net/http"

	"github.com/gin-gonic/gin"
	"golang.org/x/crypto/bcrypt"
)

func AuthMiddleware() gin.HandlerFunc {
	return func(c *gin.Context) {
		token := c.GetHeader("Authorization")
		if token == "" {
			token = c.Query("token")
		}
		if token == "" {
			token, _ = c.Cookie("token")
		}
		if token == "" {
			c.AbortWithStatusJSON(http.StatusUnauthorized, gin.H{"error": "No token provided"})
			return
		}
		switch token {
		case WorkerToken:
			c.Set("username", "worker")
		case AdminToken:
			c.Set("username", "admin")
		default:
			c.AbortWithStatusJSON(http.StatusUnauthorized, gin.H{"error": "Invalid token"})
			return
		}
		c.Next()
	}
}

func Login(c *gin.Context) {
	type Creds struct {
		Username string `json:"username"`
		Password string `json:"password"`
	}
	input := Creds{}
	if err := c.ShouldBindJSON(&input); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Error parsing JSON"})
		return
	}
	var token string
	switch input.Username {
	case "worker":
		if err := bcrypt.CompareHashAndPassword([]byte(WorkerHash), []byte(input.Password)); err != nil {
			c.JSON(http.StatusBadRequest, gin.H{"result": "Invalid credentials"})
			return
		}
		token = WorkerToken

	case "admin":
		if err := bcrypt.CompareHashAndPassword([]byte(AdminHash), []byte(input.Password)); err != nil {
			c.JSON(http.StatusBadRequest, gin.H{"result": "Invalid credentials"})
			return
		}
		token = AdminToken

	default:
		c.JSON(http.StatusBadRequest, gin.H{"result": "Invalid credentials"})
		return
	}
	c.SetCookie("token", token, 6652800, "/", "", true, true)
	c.JSON(http.StatusOK, gin.H{"token": token})
}

func Logout(c *gin.Context) {
	c.SetCookie("token", "", -1, "/", "", true, true)
	c.JSON(http.StatusOK, gin.H{"result": "Logged Out"})
}

func AuthTest(c *gin.Context) {
	status, exists := c.Get("username")
	if !exists {
		status = "unauthorized"
	}

	c.JSON(http.StatusOK, gin.H{"status": status})
}
