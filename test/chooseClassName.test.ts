import chooseClassName from '../src/components/app/filter/chooseClassName';
import { StrArray } from '../src/components/variables/types';

describe('ChooseClassName:', (): void => {
  const text: StrArray = [
    'Samsung',
    'Apple',
    'Xiaomi',
    '1',
    '2',
    '3',
    'белый',
    'желтый',
    'красный',
    'pop',
    'wrong-value',
  ];

  test('should return string: "brand"', (): void => {
    expect(chooseClassName(text[0])).toBe('brand');
    expect(chooseClassName(text[1])).toBe('brand');
    expect(chooseClassName(text[2])).toBe('brand');
  });

  test('should return string: "camera"', (): void => {
    expect(chooseClassName(text[3])).toBe('camera');
    expect(chooseClassName(text[4])).toBe('camera');
    expect(chooseClassName(text[5])).toBe('camera');
  });

  test('should return string: "color"', (): void => {
    expect(chooseClassName(text[6])).toBe('color');
    expect(chooseClassName(text[7])).toBe('color');
    expect(chooseClassName(text[8])).toBe('color');
  });

  test('should return string: "popular"', (): void => {
    expect(chooseClassName(text[9])).toBe('popular');
  });

  test('should return ""', (): void => {
    expect(chooseClassName(text[10])).toBe('');
  });
});
