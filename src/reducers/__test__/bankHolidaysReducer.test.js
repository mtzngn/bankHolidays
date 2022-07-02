import bankHolidaysReducer from '../bankHolidaysReducer';
import {initilizeBankHolidays, updateEvent} from '../bankHolidaysReducer';

it('should return the initial state', () => {
  expect(bankHolidaysReducer(undefined, {})).toEqual({
    events: [],
  });
});

it('should handle initializing', () => {
  const previousState = {
    events: [],
  };
  expect(
    bankHolidaysReducer(
      previousState,
      initilizeBankHolidays({
        events: [
          {
            id: '1',
            title: 'testTitle',
            notes: 'testNotes',
            division: 'UK',
            date: '2020-10-10',
          },
        ],
      }),
    ),
  ).toEqual({
    events: [
      {
        id: '1',
        title: 'testTitle',
        notes: 'testNotes',
        division: 'UK',
        date: '2020-10-10',
      },
    ],
  });
});

it('should handle updating an event', () => {
  const previousState = {
    events: [
      {
        id: '1',
        title: 'testTitle',
        notes: 'testNotes',
        division: 'UK',
        date: '2020-10-10',
      },
    ],
  };
  expect(
    bankHolidaysReducer(
      previousState,
      updateEvent({
        updatedEvent: {
          id: '1',
          title: 'newTitle',
          notes: 'testNotes',
          division: 'UK',
          date: '2020-10-10',
        },
      }),
    ),
  ).toEqual({
    events: [
      {
        id: '1',
        title: 'newTitle',
        notes: 'testNotes',
        division: 'UK',
        date: '2020-10-10',
      },
    ],
  });
});
