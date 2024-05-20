import { User } from "../user/user";
export interface FeedItem {
    id: number;
    title: string;
    textContent: string;
    images: string[];
    date: string;
    user: User|null;
}
