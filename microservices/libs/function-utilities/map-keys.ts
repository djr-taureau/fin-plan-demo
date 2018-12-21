import { curry, fromPairs, map, adjust, toPairs } from "ramda";

//    mapKeys :: (String -> String) -> Object -> Object
export const mapKeys = curry((fn: (a: string) => string, obj: any) =>
  fromPairs(
    map(
      adjust(fn, 0),
      toPairs(obj) as any
    ) as any
  )
);