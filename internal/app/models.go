package app

type initData struct {
	Version   string `json:"version"`
	BuildMode string `json:"build_mode"`
}

type workspaceState struct {
	CurrentID string
}
