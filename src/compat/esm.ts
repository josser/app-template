import path from 'node:path';
import { fileURLToPath } from 'node:url';

export const dirname = (url: string): string => {
  const __filename = fileURLToPath(url);
  return path.dirname(__filename);
}
