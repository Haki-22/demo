import { v4 as uuidv4 } from 'uuid';

export const generateUUID = () => {
  const uuid = uuidv4();
  console.log(uuid)
  return uuid;
};

// Example usage
const id = generateUUID();
console.log(id); // Output: 05a3e0f5-f71e-4caa-8012-229d868aa8ca
