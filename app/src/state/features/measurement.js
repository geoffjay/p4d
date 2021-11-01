import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
  status: "idle",
  error: null,
};

export const fetchMeasurementsById = createAsyncThunk(
  "measurements/fetchById",
  async () => {
    const { api } = window.backend;
    const data = await api.GetMeasurementData();
    return JSON.parse(data);
  },
);

export const slice = createSlice({
  name: "measurement",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchMeasurementsById.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchMeasurementsById.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = state.data.concat(action.payload);
      })
      .addCase(fetchMeasurementsById.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const selectMeasurementData = state => state.measurement.data;

export default slice.reducer;
