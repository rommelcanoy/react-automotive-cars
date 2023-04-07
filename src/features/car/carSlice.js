import { createSlice } from "@reduxjs/toolkit";
import carsData from '../../data/cars-dataset.json'

const initialState = {
  carsData: carsData,
  count: 0,
}

export const carSlice = createSlice({
  name: 'car',
  initialState,
  reducers: {
    increment: (state) => {
      state.count += 1;
    }
  }
})

export const { increment } = carSlice.actions;

export default carSlice.reducer;