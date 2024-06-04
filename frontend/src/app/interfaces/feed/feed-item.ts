import { UUID } from 'crypto';
import { User } from '../user/user';
import { Job } from '../jobs/job';
import { FeedItemImage } from './feed-item-image';
import { FeedItemFile } from './feed-item-file';
import { ForumPost } from '../forums/forum-post';
import { QA } from '../forums/qa';
import { CommunityPost } from '../forums/community-post';

export interface FeedItem {
  id: string;
  description: string;
  user: User;
  item_type: 'Job' | 'ForumPost' | 'QA' | 'CommunityPost';
  item: Job | ForumPost | QA | CommunityPost;
  feed_item_images?: FeedItemImage[];
  feed_item_files?: FeedItemFile[];
}
