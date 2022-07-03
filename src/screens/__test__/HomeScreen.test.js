import React from 'react';
import {render} from '@testing-library/react-native';
import HomeScreen from '../HomeScreen';
import * as apiCalls from '../../api/bankHolidaysApi';

const mockedDispatch = jest.fn();
jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useDispatch: () => mockedDispatch,
  useSelector: jest
    .fn()
    .mockImplementation(jest.fn)
    .mockReturnValue({
      events: [
        {
          title: 'test',
          division: 'UK',
          date: '2022-12-27',
          notes: 'testNote',
          id: '1',
        },
      ],
    }),
}));

jest.mock('@react-navigation/native', () => {
  const actualNav = jest.requireActual('@react-navigation/native');
  return {
    ...actualNav,
    useNavigation: () => ({
      navigation: {},
    }),
  };
});

jest.spyOn(apiCalls, 'fetchBankHolidays').mockImplementation(jest.fn);

describe('HomeScreen', () => {
  beforeAll(() => jest.clearAllMocks());

  describe('renders', () => {
    it('should render title', () => {
      const {getByText} = render(<HomeScreen />);
      expect(getByText('test')).toBeTruthy();
    });

    it('should render divison', () => {
      const {getByText} = render(<HomeScreen />);
      expect(getByText('UK')).toBeTruthy();
    });

    it('should render date', () => {
      const {getByText} = render(<HomeScreen />);
      expect(getByText('2022-12-27')).toBeTruthy();
    });

    it('should render notes', () => {
      const {getByText} = render(<HomeScreen />);
      expect(getByText('testNote')).toBeTruthy();
    });
  });
  describe('onMount', () => {
    it('should make an api call to fetch the bank holidays data', () => {
      render(<HomeScreen />);
      expect(apiCalls.fetchBankHolidays).toHaveBeenCalled();
    });
  });
});
