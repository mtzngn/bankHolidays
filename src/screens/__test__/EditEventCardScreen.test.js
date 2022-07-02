import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import EditEventCardScreen from '../EditEventCardScreen';

const mockedDispatch = jest.fn();
const mockedNavigate = jest.fn();

jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useDispatch: () => mockedDispatch,
  useSelector: jest.fn(),
}));

const props = {
  route: {
    params: {
      event: {
        id: '1',
        date: '2022-10-10',
        division: 'UK',
        notes: 'testNote',
        title: 'testTitle',
      },
    },
  },
};

jest.mock('@react-navigation/native', () => {
  const actualNav = jest.requireActual('@react-navigation/native');
  return {
    ...actualNav,
    useNavigation: () => ({
      navigate: mockedNavigate,
    }),
  };
});

describe('EditEventCardScreen', () => {
  describe('renders', () => {
    it('should render title', () => {
      const {getByDisplayValue} = render(<EditEventCardScreen {...props} />);
      expect(getByDisplayValue('testTitle')).toBeTruthy();
    });

    it('should render date', () => {
      const {getByDisplayValue} = render(<EditEventCardScreen {...props} />);
      expect(getByDisplayValue('2022-10-10')).toBeTruthy();
    });

    it('should render division', () => {
      const {getByDisplayValue} = render(<EditEventCardScreen {...props} />);
      expect(getByDisplayValue('UK')).toBeTruthy();
    });

    it('should render notes', () => {
      const {getByDisplayValue} = render(<EditEventCardScreen {...props} />);
      expect(getByDisplayValue('testNote')).toBeTruthy();
    });
  });
  describe('input', () => {
    it('user can update text', () => {
      const {getByDisplayValue} = render(<EditEventCardScreen {...props} />);
      const titleInput = getByDisplayValue('testTitle');
      fireEvent.changeText(titleInput, 'newTitle');
      expect(getByDisplayValue('newTitle')).toBeTruthy();
    });
  });
  describe('submit', () => {
    describe('renders', () => {
      it('should render submit button', () => {
        const {getByText} = render(<EditEventCardScreen {...props} />);
        expect(getByText('Submit')).toBeTruthy();
      });
    });

    describe('onPress', () => {
      it('should navigate user to Home Screen', () => {
        const {getByText} = render(<EditEventCardScreen {...props} />);
        fireEvent.press(getByText('Submit'));
        expect(mockedNavigate).toHaveBeenCalledWith('UK Bank Holidays');
      });
      it('should dispatch updateEvent action', () => {
        const {getByText} = render(<EditEventCardScreen {...props} />);
        fireEvent.press(getByText('Submit'));
        expect(mockedDispatch).toHaveBeenCalled();
      });
    });
  });
});
