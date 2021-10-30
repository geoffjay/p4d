package main

import (
	_ "embed"
	"os"

	"github.com/geoffjay/p4d/internal/app"
)

//go:embed app/build/static/js/main.js
var js string

//go:embed app/build/static/css/main.css
var css string

func main() {
	os.Exit(app.Run(js, css))
}
