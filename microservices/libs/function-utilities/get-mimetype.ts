import { extname } from 'path';
import { getType } from 'mime';

/**
 * TODO: implemented in Content Service need to pull this utility
 * Determine the mimType based on filename.ext.
 * @param filename 
 */
export const getContentMimeType = (filename: string) => getType(extname(filename));