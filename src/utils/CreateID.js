import { v4 as uuidv4 } from 'uuid';

/**
 * Generates a UUID (Universally Unique Identifier) using the uuidv4 library.
 * @function
 * @returns {string} The generated UUID.
 * @example
 * 
 * const uuid = generateUUID();
 * console.log(uuid); // Output: e.g., "aece4f23-954e-4d41-932b-55f4b51987c2"
 */
export const generateUUID = () => uuidv4()