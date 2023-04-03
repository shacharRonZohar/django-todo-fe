export type FromSnakeToKebabCase<T extends string> = T extends `${infer A}_${infer B}`
  ? Lowercase<`${A}-${FromSnakeToKebabCase<B>}`>
  : Lowercase<T>
