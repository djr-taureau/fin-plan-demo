/**
 * Capitalize first Letter in a String
 * @param s 
 */
export const capitalize = (s:string) => {
  if (typeof s !== 'string') return ''
  return s.charAt(0).toUpperCase() + s.slice(1)
};