import { add, multiply } from './calculator';


test('add numbers', () => {
    expect(add(2, 3)).toBe(5);
});

test('multiply numbers', () => {
    expect(multiply(2, 3)).toBe(6);
});
