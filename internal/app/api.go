package app

import (
	"bytes"
	"encoding/gob"

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
