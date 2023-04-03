import type { FromSnakeToKebabCase } from '@/models/util'

export const utilService = {
  fromSnakeToKebabCase
}

function fromSnakeToKebabCase<T extends string>(str: T) {
  return str.replace(/_/g, '-').toLowerCase() as FromSnakeToKebabCase<T>
}
