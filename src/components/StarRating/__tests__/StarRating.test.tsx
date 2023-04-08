import React from 'react';
import {render} from '@testing-library/react-native';

import {StarRating} from '../StarRating';

describe('StarRating', () => {
  test('component rendered', () => {
    const {debug} = render(<StarRating rating={{average: 10}} />);

    debug();
  });
});
