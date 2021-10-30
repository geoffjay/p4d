package app

import (
	"bytes"
	"encoding/gob"
	"encoding/json"

	"github.com/wailsapp/wails"
	"github.com/wailsapp/wails/lib/logger"
)

const (
	defaultStateKey     = "state_default"
	defaultWorkspaceKey = "wksp_default"
	workspacePrefix     = "wksp_"
	metadataKeyPrefix   = "md_"
	messageKeyPrefix    = "msg_"
)

type api struct {
	runtime *wails.Runtime
	logger  *logger.CustomLogger
	store   *store
	appData string
	state   *workspaceState
}

type storeLogger struct {
	*logger.CustomLogger
}

type datum struct {
	X string  `json:"x"`
	Y float32 `json:"y"`
}

type measurementData struct {
	ID   string   `json:"id"`
	Data []*datum `json:"data"`
}

func (s storeLogger) Warningf(message string, args ...interface{}) {
	s.Warnf(message, args...)
}

func (a *api) getCurrentState() *workspaceState {
	rtn := &workspaceState{
		CurrentID: defaultWorkspaceKey,
	}
	val, err := a.store.get([]byte(defaultStateKey))
	if err != nil && err != errKeyNotFound {
		a.logger.Errorf("failed to get current state from store: %v", err)
	}
	if len(val) == 0 {
		return rtn
	}
	dec := gob.NewDecoder(bytes.NewBuffer(val))
	if err := dec.Decode(rtn); err != nil {
		a.logger.Errorf("failed to decode state: %v", err)
	}
	return rtn
}

func (a *api) GetMeasurementData() (string, error) {
	data := []*measurementData{
		&measurementData{
			ID: "one",
			Data: []*datum{
				&datum{X: "0", Y: 12.0},
				&datum{X: "20", Y: 8.0},
				&datum{X: "30", Y: 15.0},
				&datum{X: "40", Y: 12.0},
				&datum{X: "50", Y: 10.0},
				&datum{X: "60", Y: 11.0},
				&datum{X: "70", Y: 12.5},
				&datum{X: "80", Y: 15.2},
				&datum{X: "90", Y: 12.0},
				&datum{X: "100", Y: 5.75},
			},
		},
		&measurementData{
			ID: "two",
			Data: []*datum{
				&datum{X: "0", Y: 11.1},
				&datum{X: "20", Y: 18.2},
				&datum{X: "30", Y: 9.5},
				&datum{X: "40", Y: 11.2},
				&datum{X: "50", Y: 18.0},
				&datum{X: "60", Y: 21.9},
				&datum{X: "70", Y: 9.55},
				&datum{X: "80", Y: 5.0},
				&datum{X: "90", Y: 14.1},
				&datum{X: "100", Y: 15.0},
			},
		},
	}

	b, err := json.Marshal(data)
	if err != nil {
		return "[]", err
	}
	return string(b), nil
}
