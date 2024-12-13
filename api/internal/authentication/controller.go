package authentication

import (
	"github.com/absentbird/TESC-Farm/internal/util"
	"github.com/gin-gonic/gin"
	"net/http"
	"strconv"
)

func HashPassword(pass string) (string, error) {
	bytepass := []byte(pass)
	hash, err := bcrypt.GenerateFromPassword(bytepass, bcrypt.MinCost)
	if err != nil {
		return "", err
	}
	return string(hash), err
}



func Check_Priviledges(role_required int, user_id int) {

}

//Checks token to see if it's still valid
func Token_Valid(c *gin.Context) {
	token := Token{}
	if err := util.DB.First(&token, c.Param("token")).Error; err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		return
	}
	expiration = token.Created_at
	expiration.Add(time.Hour * token.Active_for)
	if (time.Now().After(expiration)) {
		c.JSON(http.StatusBadRequest)
		return
	}
	c.JSON(http.StatusOK, records)
}

// Crops
func Login(c *gin.Context) {
	login := Users{}
	//find first user matching username or email and match password hash. if hash matches, generate token and add to DB.	
}

