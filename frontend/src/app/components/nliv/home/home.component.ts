import { Component } from '@angular/core';
import { FeedItem } from '../../../interfaces/feed/feed-item';
import { FeedService } from '../../../services/feed/feed.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  constructor(private feedService: FeedService) {}

  async ngOnInit() {
    this.feedItems = await this.feedService.getFeedItems();
  }

  ngOnDestroy() {}

  ngOnChanges() {}

  ngAfterViewInit() {}

  showFeed: boolean = true;
  showFeedItem: boolean = false;
  showFeedImage: boolean = false;
  activeFeedImage: string = '';
  activeFeedItem: FeedItem = {
    id: 0,
    title: '',
    textContent: '',
    images: [],
    date: '',
    user: null,
  };

  feedItems: Promise<FeedItem[]> = this.feedService.getFeedItems();

  showFeeds() {
    this.showFeed = true;
    this.showFeedItem = false;
    this.showFeedImage = false;
  }

  feedItemClicked(feedItem: FeedItem) {
    this.showFeed = false;
    this.showFeedItem = true;
    this.showFeedImage = false;
    this.activeFeedItem = feedItem;
  }
  feedImageClicked(image: string, feedItem: FeedItem) {
    this.activeFeedItem = feedItem;
    this.activeFeedImage = image;
    this.showFeedImage = true;
  }
  closeImageView() {
    this.showFeedImage = false;
  }
  feedItemLike() {}

  randomIntInRange(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
}
