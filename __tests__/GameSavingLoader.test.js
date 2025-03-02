import GameSavingLoader from '../src/GameSavingLoader';
import read from '../src/reader';
import json from '../src/parser';
import GameSaving from '../src/GameSaving';

jest.mock('../src/reader');
jest.mock('../src/parser');

describe('GameSavingLoader', () => {
  test('сохранение загружается корректно', async () => {
    const mockData = {
      id: 9,
      created: 1546300800,
      userInfo: { id: 1, name: 'Hitman', level: 10, points: 2000 },
    };

    read.mockResolvedValue(new ArrayBuffer(10));
    json.mockResolvedValue(JSON.stringify(mockData));

    const saving = await GameSavingLoader.load();

    expect(saving).toEqual(
      new GameSaving(mockData.id, mockData.created, mockData.userInfo)
    );
  });

  test('обрабатывает ошибки', async () => {
    read.mockRejectedValue(new Error('Read error'));

    await expect(GameSavingLoader.load()).rejects.toThrow('Read error');
  });
});