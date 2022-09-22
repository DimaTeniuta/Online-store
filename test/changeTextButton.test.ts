import changeTextButton from '../src/components/controller/goods/textButton';
import { StrArray } from '../src/components/variables/types';

describe('changeTextButton:', (): void => {
  test('should return string', (): void => {
    const arr = ['Hello', 'Jest', '!'] as StrArray;
    const text = 'two-case' as string;

    expect(changeTextButton(arr, arr[0])).toBe('Удалить из корзины');
    expect(changeTextButton(arr, arr[1])).toBe('Удалить из корзины');
    expect(changeTextButton(arr, arr[2])).toBe('Удалить из корзины');
    expect(changeTextButton(arr, text)).toBe('Добавить в корзину');
  });
});
