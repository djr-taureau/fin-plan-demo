import {
  ifElse,
  is,
  append,
  compose,
  split,
  has,
  over,
  assoc,
  lensProp,
  reduce
} from 'ramda';
import { getValueAs } from './';


interface InsertExtensionsOptions {
  convertValueType?: Boolean
}

const makeExtension = (acc, item) => {

  const insert = ifElse(
    is(Array),
    append(item.value),
    compose(append(item.value), split(item.name))
  )

  const formExtension = ifElse(
    has(item.name),
    over(lensProp(item.name), insert),
    assoc(item.name, item.value)
  )

  return formExtension(acc);
}


const makeExtensionAndConvert = (acc, item) => {

  const insert = ifElse(
    is(Array),
    append(
      getValueAs(item.valueType, item.value)
    ),
    compose(append(
      getValueAs(item.valueType, item.value)
    ), split(item.name))
  )

  const formExtension = ifElse(
    has(item.name),
    over(lensProp(item.name), insert),
    assoc(item.name,
      getValueAs(item.valueType, item.value)
    )
  )

  return formExtension(acc);
}

/**
 * 
 * @param obj target object
 * @param extensions array of objects containing at minimum {name: any, value: any}
 * @param options InsertExtensionsOptions object
 */
export function insertExtensions(obj:Object, extensions: Array<Object>, options: InsertExtensionsOptions = { convertValueType: true }) {
  if(options.convertValueType) {
    return reduce(makeExtensionAndConvert, obj, extensions);
  } else {
    return reduce(makeExtension, obj, extensions);
  }
}