import {createSlice} from '@reduxjs/toolkit';
import {sortByDate} from '../utils/generalFunctions';

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
      const updatedEvent = action.payload.updatedEvent;
      const eventId = updatedEvent.id;
      state.events = state.events.map(event =>
        event.id === eventId ? {...updatedEvent} : {...event},
      );
      state.events = sortByDate(state.events);
    },
  },
});

export const {initilizeBankHolidays, updateEvent} = bankHolidaysSlice.actions;

export default bankHolidaysSlice.reducer;
