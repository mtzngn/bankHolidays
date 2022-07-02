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
    updateEvent: (state, action) => {
      console.log(action.payload);
      const updatedEvent = action.payload.updatedEvent;
      const eventId = updatedEvent.id;
      state.events = state.events.map(event =>
        event.id === eventId ? {...updatedEvent} : {...event},
      );
    },
  },
});

export const {initilizeBankHolidays, updateEvent} = bankHolidaysSlice.actions;

export default bankHolidaysSlice.reducer;
