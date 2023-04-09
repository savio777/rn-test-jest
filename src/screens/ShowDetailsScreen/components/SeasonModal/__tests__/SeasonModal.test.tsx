import React, {createRef} from 'react';
import {Modalize} from 'react-native-modalize';
import {render, act, fireEvent} from '@testing-library/react-native';

import {SeasonModal} from '../SeasonModal';

describe('SeasonModal', () => {
  describe('the component rendered', () => {
    it('when open state', () => {
      const modalizeRef = createRef<Modalize>();

      const {getAllByText} = render(
        <SeasonModal
          ref={modalizeRef}
          seasons={['1', '2', '3']}
          onSelectSeason={season => console.log(season)}
          selectedSeason="1"
        />,
      );

      act(() => {
        modalizeRef.current?.open();
      });

      expect(getAllByText('season', {exact: false}).length).toBe(3);
      //expect(getAllByText(/eason/i).length).toBe(3);
    });

    describe('call onSelectSeason', () => {
      it('with correct season option was pressed', () => {
        const modalizeRef = createRef<Modalize>();

        const onSelectSeasonMock = jest.fn();

        const {getByText} = render(
          <SeasonModal
            ref={modalizeRef}
            seasons={['1', '2', '3']}
            onSelectSeason={onSelectSeasonMock}
            selectedSeason="1"
          />,
        );

        act(() => {
          modalizeRef.current?.open();
        });

        const season2Element = getByText('season 2', {exact: false});

        fireEvent.press(season2Element);

        expect(onSelectSeasonMock).toBeCalledWith('2');
      });
    });
  });
});
