import { UUID } from 'crypto';

export interface FeedItemImage {
  id?: UUID;
  feed_item_id: number;
  image: string;
}
