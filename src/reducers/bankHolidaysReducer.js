import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  events: [],
};

export const bankHolidaysSlice = createSlice({
  name: 'bankHolidays',
  initialState,
  reducers: {
    initilizeBankHolidays: (state, action) => {
      state.events = action.payload.events;
    },
  },
});

export const {initializeLandmarks, likeLandmark, selectLandmark} =
  bankHolidaysSlice.actions;

export default bankHolidaysSlice.reducer;
