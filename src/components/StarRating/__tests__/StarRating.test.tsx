import React from 'react';
import {render} from '@testing-library/react-native';

import {StarRating} from '../StarRating';

describe('StarRating', () => {
  describe('rating was passed', () => {
    it('show the star icon', () => {
      const {getByTestId} = render(<StarRating rating={{average: 10}} />);
      // debug();

      const starIcon = getByTestId('star-icon');

      expect(starIcon).toBeTruthy();
    });

    it('show the average', () => {
      const {getByText} = render(<StarRating rating={{average: 10}} />);

      const element = getByText('10');

      expect(element).toBeTruthy();
    });
  });
});
