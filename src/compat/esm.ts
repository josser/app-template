import path from 'path';
import { fileURLToPath } from 'url';

export const dirname = (url: string): string => {
  const __filename = fileURLToPath(url);
  return path.dirname(__filename);
}
