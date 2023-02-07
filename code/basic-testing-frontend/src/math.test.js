// import { test} from 'vitest'
import { it, expect } from 'vitest'
import { add } from './math'

it('should summarize all numbers in an array', () => {
  const result = add([1,2,3])

  expect(result).toBe(6);
});
