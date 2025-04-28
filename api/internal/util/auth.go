package util

import (
	"github.com/gin-gonic/gin"
	"golang.org/x/crypto/bcrypt"
	"net/http"
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
		if token != WorkerToken {
			c.AbortWithStatusJSON(http.StatusUnauthorized, gin.H{"error": "Invalid token"})
			return
		}
		c.Next()
	}
}

// Auth godoc
// @Summary      Login
// @Description  Authenticate and receive a token.
// @Tags         Authentication
// @Accept       json
// @Produce      json
// @Param        Username Password
// @Success      200  {object}  model.Account
// @Failure      400  {object}  httputil.HTTPError
// @Failure      404  {object}  httputil.HTTPError
// @Failure      500  {object}  httputil.HTTPError
// @Router       
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
	if input.Username != "worker" {
		c.JSON(http.StatusBadRequest, gin.H{"result": "Invalid credentials"})
		return
	}
	if err := bcrypt.CompareHashAndPassword([]byte(WorkerHash), []byte(input.Password)); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"result": "Invalid credentials"})
		return
	}
	c.SetCookie("token", WorkerToken, 6652800, "/", "", true, true)
	c.JSON(http.StatusOK, gin.H{"token": WorkerToken})
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
func Logout(c *gin.Context) {
	c.SetCookie("token", "", -1, "/", "", true, true)
	c.JSON(http.StatusOK, gin.H{"result": "Logged Out"})
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
func AuthTest(c *gin.Context) {
	c.JSON(http.StatusOK, gin.H{"status": "Authorized"})
}
