import { UUID } from 'crypto';
export interface SearchSuggestions {
  id: UUID;
  title: string;
  description: string;
  url: string;
  image: string;
  type: string;
  category: string;
  tags: string[];
  date: string;
}
