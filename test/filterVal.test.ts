/**
 * @jest-environment jsdom
 */
import FilterVal from '../src/components/app/filter/filterValuesBtn';

describe('FilterVal:', (): void => {
  const filter: FilterVal = new FilterVal();

  test('addActivForReload: should be defined', (): void => {
    expect(filter.addActivForReload).toBeDefined;
    expect(filter.addActivForReload).not.toBeUndefined;
  });

  test('addClassActive: should be defined', (): void => {
    expect(filter.addClassActive).toBeDefined;
    expect(filter.addClassActive).not.toBeUndefined;
  });

  test('filterValClick: should be defined', (): void => {
    expect(filter.filterValClick).toBeDefined;
    expect(filter.filterValClick).not.toBeUndefined;
  });
});
