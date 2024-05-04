import { createSlice } from "@reduxjs/toolkit";
import { ILeafLetState } from "src/types/redux/states.type";

const initialState: ILeafLetState = {
  listPopUpCameraOpen: {},
  places: [],
  deviceListSelected: [],
};

export const leafletSlice = createSlice({
  name: "leaflet",
  initialState,
  reducers: {
    setListPopUpCameraOpen: (state, action) => {
      state.listPopUpCameraOpen = action.payload;
    },
    setPlaces: (state, action) => {
      state.places = action.payload;
    },
    setDeviceListSelected: (state, action) => {
      state.deviceListSelected = action.payload;
    },
  },
});

export const { setListPopUpCameraOpen, setPlaces, setDeviceListSelected } =
  leafletSlice.actions;

export default leafletSlice.reducer;
