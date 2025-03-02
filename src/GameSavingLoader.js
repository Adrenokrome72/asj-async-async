import read from './reader';
import json from './parser';
import GameSaving from './GameSaving';

export default class GameSavingLoader {
  static async load() {
    try {
      const buffer = await read(); // 1. Ждём чтения
      const jsonString = await json(buffer); // 2. Ждём декодирования
      const parsedData = JSON.parse(jsonString); // 3. Парсим JSON
      return new GameSaving( // 4. Возвращаем объект
        parsedData.id,
        parsedData.created,
        parsedData.userInfo
      );
    } catch (error) {
      throw new Error(`При загрузке сохранения произошла ошибка: ${error.message}`);
    }
  }
}