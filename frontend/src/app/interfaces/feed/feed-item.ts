import { UUID } from 'crypto';
import { User } from '../user/user';
import { Job } from '../jobs/job';
import { FeedItemImage } from './feed-item-image';
import { FeedItemFile } from './feed-item-file';

export interface FeedItem {
  id: UUID;
  description: string;
  user: User;
  item_type: 'Job' | 'ForumPost' | 'QA' | 'CommunityPost';
  item: Job; // | ForumPost | QA | CommunityPost;
  feed_item_images?: FeedItemImage[];
  feed_item_files?: FeedItemFile[];
}
