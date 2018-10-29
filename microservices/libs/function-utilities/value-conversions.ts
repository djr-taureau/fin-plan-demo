import {ValueType} from '../domain-entities/common';

export function getValueAs(type: ValueType, value: string) {
  switch(type) {
    case ValueType.Number:
      return parseInt(value);
    case ValueType.Boolean:
      const string = value.toLowerCase().trim();
      switch(string) {
        case "false":
        case "0":
        case "no":
          return false;
        case "true":
        case "1":
        case "yes":
          return true;
        default:
          return new Boolean(string);
      }
    case ValueType.Object:
      return JSON.parse(value);
    default: //String
      return value;
  }
} 

export function setValueFrom(type: ValueType, value: any) {
  switch(type) {
    case ValueType.Object:
      return JSON.stringify(value);
    default:
      return value
  }
}