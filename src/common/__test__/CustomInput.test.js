import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import CustomInput from '../CustomInput';

const mockOnChangeText = jest.fn();
const props = {
  value: 'testValue',
  onChangeText: mockOnChangeText,
};

describe('CustomInput', () => {
  describe('renders', () => {
    it('should render', () => {
      const {getByDisplayValue} = render(<CustomInput {...props} />);
      expect(getByDisplayValue('testValue')).toBeTruthy();
    });
  });

  describe('OnChange', () => {
    it('should call onChangeText', () => {
      const {getByDisplayValue} = render(<CustomInput {...props} />);
      fireEvent.changeText(getByDisplayValue('testValue'), 'newValue');
      expect(mockOnChangeText).toHaveBeenCalled();
    });
  });
});
