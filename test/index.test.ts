import dotpather from '../index'

describe("dotpather", () => {
  test("returns a function", () => {
    expect(dotpather).not.toBeUndefined();
    expect(typeof dotpather).toBe("function");
  });

  test('returns value at property', () => {
    const lookup = dotpather('check');
    expect(lookup({ check: "woo" })).toBe("woo");

    expect(lookup({ check: { derp: true } })).toStrictEqual({ derp: true });
  })

  test('finds nested values', () => {
    const lookup = dotpather('check.that.attribute');
  
    expect(lookup({ check: { that: { attribute: 777 }}})).toBe(777);
  });

  test('returns undefined if path not found', () => {
   const lookup = dotpather('invalid.path');

    expect(lookup({valid: {path: true}})).toBeUndefined();
  });

  test('properly returns falsey values', () => {
    const lookup = dotpather('falsey.value');

    expect(lookup({falsey: {value: false}})).toBeFalsy();
    expect(lookup({falsey: {value: null}})).toBeNull();
  });

  test('works on arrays also', () => {
    const lookup = dotpather('arr.1');  

    expect(lookup({arr: [44, 22]})).toBe(22);
  });
});








