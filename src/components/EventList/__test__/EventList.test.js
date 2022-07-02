import React from 'react';
import {render} from '@testing-library/react-native';
import EventList from '../EventList';

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

describe('EventList', () => {
  it('should render', () => {
    const {getByText} = render(<EventList />);
    expect(getByText('test')).toBeTruthy();
  });
});
