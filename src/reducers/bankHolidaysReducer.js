import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  events: [],
};

export const bankHolidaysSlice = createSlice({
  name: 'bankHolidays',
  initialState,
  reducers: {
    initilizeBankHolidays: (state, action) => {
      state.events = action.payload;
    },
  },
});

export const {initilizeBankHolidays} = bankHolidaysSlice.actions;

export default bankHolidaysSlice.reducer;
