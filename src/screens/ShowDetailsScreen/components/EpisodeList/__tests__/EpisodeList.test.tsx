import {render} from '@testing-library/react-native';
import React from 'react';
import {EpisodeList} from '../EpisodeList';
import {mocks} from './mock';

describe('EpisodeList', () => {
  it('component rendered', () => {
    // uma maneira de mockar o navigation
    /*
    render(
      <NavigationContainer>
        <EpisodeList show={mocks.show} />
      </NavigationContainer>,
    );
    */

    // mockando o navigation pelo jestSetup
    render(<EpisodeList show={mocks.show} />);

    expect(true).toBeTruthy();
  });
});
