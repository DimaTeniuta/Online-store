import LocalStorage from '../src/components/controller/utilities/localStorage';

describe('LocalStorage:', (): void => {
  const storage: LocalStorage = new LocalStorage('test');

  test('should be defined', (): void => {
    expect(storage.getLocalStorage).toBeDefined();
    expect(storage.getLocalStorage).not.toBeUndefined();
  });

  test('should be defined', (): void => {
    expect(storage.setLocalStorage).toBeDefined();
    expect(storage.setLocalStorage).not.toBeUndefined();
  });
});
