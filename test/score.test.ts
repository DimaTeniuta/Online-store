import score from '../src/components/score/score';

describe('Score:', (): void => {
  test('should return string', () => {
    const text = 'Hello' as string;

    expect(score(text)).toBe('Hello');
  });
});
