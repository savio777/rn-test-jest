import {api} from '../../api';
import {showService} from '../showService';
import {
  episodeList,
  episode1,
  episode2,
  episode22,
  episode23,
} from './episodes.mock';

describe('showService', () => {
  describe('get episodes', () => {
    beforeAll(() => {
      /**
       * mockResolvedValue => para todos os tests
       * mockResolvedValueOnce => para o test em específico (para não atraplhar os demais testes)
       */
      jest.spyOn(api, 'get').mockResolvedValue({data: episodeList});
    });

    it('when API return episodes list with all seasons names', async () => {
      const groupedEpisodes = await showService.getEpisodes('300');

      expect(groupedEpisodes.seasonNames.includes('1')).toBeTruthy();
      expect(groupedEpisodes.seasonNames.includes('2')).toBeTruthy();
      expect(groupedEpisodes.seasonNames.length).toBe(2);
    });

    it('when API return episodes list with episodes grouped by season', async () => {
      const groupedEpisodes = await showService.getEpisodes('300');

      const season1 = groupedEpisodes.seasons[1];
      const season2 = groupedEpisodes.seasons[2];

      expect(season1.includes(episode1)).toBeTruthy();
      expect(season1.includes(episode2)).toBeTruthy();

      expect(season2.includes(episode22)).toBeTruthy();
      expect(season2.includes(episode23)).toBeTruthy();
    });
  });
});
