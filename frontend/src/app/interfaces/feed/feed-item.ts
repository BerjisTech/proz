import { UUID } from "crypto";
import { User } from "../user/user";

export interface FeedItem {
    id: UUID;
    title: string;
    textContent: string;
    images: string[];
    date: string;
    user: User|null;
}
