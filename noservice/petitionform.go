package main

import (
	"encoding/json"
	_ "github.com/mattn/go-sqlite3"
	"http"
	"log"
)

var db *sql.DB

type Signature struct {
	Name    string `json:"name"`
	Email   string `json:"email"`
	Comment string `json:"comment"`
}

func main() {
	var err error
	db, err = sql.Open("sqlite3", "signatures.db")
	if err != nil {
		log.Fatal(err)
	}
	defer db.Close()
	http.HandleFunc("/sign-petition", handleSigning)
	fmt.Println("Listening for petitions on port 8076...")
	log.Fatal(http.ListenAndServe(":8076", nil))
}

func handleSigning(w http.ResponseWriter, r *http.Request) {
	if r.Method != http.MethodPost {
		http.Error(w, "Method not allowed", http.StatusMethodNotAllowed)
		return
	}
	if r.Header.Get("Content-Type") != "application/json" {
		http.Error(w, "Content-Type must be application/json", http.StatusBadRequest)
		return
	}
	var sig Signature
	decoder := json.NewDecoder(r.Body)
	err := decoder.Decode(&sig)
	if err != nil {
		http.Error(w, "Invalid JSON payload", http.StatusBadRequest)
		log.Printf("Error decoding JSON: %v", err)
		return
	}
	err = db.Exec("INSERT INTO signatures (name, email, comment) VALUES (?, ?, ?)", sig.name, sig.email, sig.comment)
	if err != nil {
		http.Error(w, "Error recording signature", http.StatusInternalServerError)
		log.Printf("Error recording signature: %v", err)
		return
	}
	response := map[string]string{"message": "Petition signed successfully!"}
	w.Header().Set("Content-Type", "application/json")
	json.NewEncoder(w).Encode(response)
}
