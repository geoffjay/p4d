PROJECT := "p4d"

M = $(shell printf "\033[34;1m▶\033[0m")

all: build

build: ; $(info $(M) Building a development distribution of $(PROJECT)...)
	@wails build

release: ; $(info $(M) Building a release distribution of $(PROJECT)...)
	@wails build -p

clean: ; $(info $(M) Removing build files...)
	@rm -rf build

fe-format: ; $(info $(M) Formatting project files...)
	@yarn --cwd=app/ fmt:prettier

fe-lint: ; $(info $(M) Checking project files...)
	@yarn --cwd=app/ lint:js

fe-test: ; $(info $(M) Running tests...)
	@yarn --cwd=app/ test

.PHONY: all build release clean fe-format fe-lint fe-test
