// import { test} from 'vitest'
import { it, expect } from 'vitest'
import { add } from './math'
import { transformToNumber } from './util/numbers';

it('should summarize all numbers in an array', () => {
  const result = add([1,2,3])

  expect(result).toBe(6);
});

it('should transform a string into a number', () => {
  const result = transformToNumber('3')

  expect(result).toBe(3)
});
