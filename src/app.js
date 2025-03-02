import GameSavingLoader from './GameSavingLoader';

(async () => {
  try {
    const saving = await GameSavingLoader.load();
    console.log('Loaded saving:', saving);
  } catch (error) {
    console.error('Error:', error);
  }
})();