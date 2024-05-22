import { UUID } from "crypto";

export interface FeedItemFile {
    id?: UUID;
    feed_item_id: number;
    file: string;
  }
  