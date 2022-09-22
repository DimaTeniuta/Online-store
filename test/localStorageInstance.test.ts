import LocalStorage from '../src/components/controller/utilities/localStorage';
import LocalStorageFilterValue from '../src/components/controller/utilities/localStorageFiltersValue';

describe('LocalStorageFilterValue:', (): void => {
  const local: LocalStorageFilterValue = new LocalStorageFilterValue();

  test('should be instace of LocalStorage', (): void => {
    expect(local).toBeInstanceOf(LocalStorage);
  });

  test('delLocalMainArray: should be defined', (): void => {
    expect(local.delLocalMainArray).toBeDefined;
    expect(local.delLocalMainArray).not.toBeUndefined;
  });

  test('getLocalStorage: should be defined', (): void => {
    expect(local.getLocalStorage).toBeDefined;
    expect(local.getLocalStorage).not.toBeUndefined;
  });

  test('setLocalStorage: should be defined', (): void => {
    expect(local.setLocalStorage).toBeDefined;
    expect(local.setLocalStorage).not.toBeUndefined;
  });
});
