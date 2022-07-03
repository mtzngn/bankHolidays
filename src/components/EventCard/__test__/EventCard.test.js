import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import EventCard from '../EventCard';

const mockedNavigate = jest.fn();
jest.mock('@react-navigation/native', () => {
  const actualNav = jest.requireActual('@react-navigation/native');
  return {
    ...actualNav,
    useNavigation: () => ({
      navigate: mockedNavigate,
    }),
  };
});

const props = {
  event: {
    id: '1',
    title: 'testTitle',
    date: '2020-10-10',
    notes: 'testNote',
    division: 'UK',
  },
};

describe('EventCard', () => {
  beforeAll(() => jest.clearAllMocks());
  describe('renders', () => {
    it('should render', () => {
      const {getByText} = render(<EventCard {...props} />);
      expect(getByText('testTitle')).toBeTruthy();
    });
  });
  describe('onPress', () => {
    it('should navigate user to Edit Event screen', () => {
      const {getByText} = render(<EventCard {...props} />);
      fireEvent.press(getByText('testTitle'));
      expect(mockedNavigate).toHaveBeenCalledWith('Edit Event', props);
    });
  });
});
