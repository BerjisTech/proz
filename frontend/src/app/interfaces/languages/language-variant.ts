import { UUID } from 'crypto';
export interface LanguageVariant {
  id?: UUID;
  name: string;
  language_id: UUID;
}
