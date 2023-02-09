// import { test} from 'vitest'
import { it, expect } from 'vitest'
import { add } from './math'
import { transformToNumber } from './util/numbers';
import { validateStringNotEmpty } from './util/validation';

it('should summarize all numbers in an array', () => {
  const result = add([1,2,3])
  expect(result).toBe(6);
});

it('should transform a string into a number', () => {
  const result = transformToNumber('3')
  expect(result).toBe(3)
});

it('should throw an error if string is empty', () => {
  expect(() => {
    validateStringNotEmpty('')
  }).toThrow("Invalid input - must not be empty.");
});

it('should return OK for non-empty string', () => {
  const result = validateStringNotEmpty('asdf')
  expect(result).toBe("String OK")  
});
