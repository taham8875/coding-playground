package main

import (
	"example.com/me/romanNumerals"
	"fmt"
	"net/http"
	"strconv"
	"strings"
)

func RomanNumeralService() {
	http.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
		urlPathElements := strings.Split(r.URL.Path, "/")
		if len(urlPathElements) != 3 {
			w.WriteHeader(http.StatusBadRequest)
			fmt.Fprintf(w, "Usage: /roman_number/ArabicNumber")
			return
		}
		if urlPathElements[1] == "roman_number" {
			number, err := strconv.Atoi(urlPathElements[2])
			romanNumber, ok := romanNumerals.RomanNumerals[number]
			if !ok || err != nil {
				w.WriteHeader(http.StatusNotFound)
				fmt.Fprintf(w, "404 not found")
			} else {
				fmt.Fprintf(w, "%s\n", romanNumber)
			}
		}
	})
}

func main() {
	RomanNumeralService()
	http.ListenAndServe(":8000", nil)
}
