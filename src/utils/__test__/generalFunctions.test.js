import {
  filterBySixMonthFromNow,
  addDivisons,
  capitalizeWords,
  formatText,
  sortByDate,
} from '../generalFunctions';

describe('generalFunctions', () => {
  describe('filterBySixMonthFromNow', () => {
    beforeAll(() => {
      jest.useFakeTimers('modern');
      jest.setSystemTime(new Date('2022-01-01'));
    });

    afterAll(() => {
      jest.useRealTimers();
    });
    it('should filter the array by date in between now nad 6 month in future', () => {
      const events = [
        {date: '2022-02-01'},
        {date: '2022-08-01'},
        {date: '2021-01-01'},
      ];
      const filteredEvents = filterBySixMonthFromNow(events);
      expect(filteredEvents).toEqual([{date: '2022-02-01'}]);
    });
  });

  describe('addDivisons', () => {
    it('should add division as key-value to passed array of object events', () => {
      const events = {
        'england-and-wales': {division: 'England And Wales', events: [{}]},
        scotland: {division: 'Scotland', events: [{}]},
        'northern-ireland': {division: 'Northern Ireland', events: [{}]},
      };
      expect(addDivisons(events)).toEqual([
        {division: 'England And Wales', id: 'england0'},
        {division: 'Scotland', id: 'scotland0'},
        {division: 'Northern Ireland', id: 'ireland0'},
      ]);
    });
  });

  describe('capitalizeWords', () => {
    it('should capitalize first letter of each word', () => {
      expect(capitalizeWords('hello world')).toEqual('Hello World');
    });
  });

  describe('formatText', () => {
    it('should remove dashes from string and capitilize words', () => {
      expect(formatText('hello-world')).toEqual('Hello World');
    });
  });
  describe('sortByDate', () => {
    it('should sort the events by date', () => {
      const events = [
        {date: '2022-02-01'},
        {date: '2022-08-01'},
        {date: '2021-01-01'},
      ];
      expect(sortByDate(events)).toEqual([
        {date: '2021-01-01'},
        {date: '2022-02-01'},
        {date: '2022-08-01'},
      ]);
    });
  });
});
