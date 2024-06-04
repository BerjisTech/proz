import { Component, OnInit } from '@angular/core';
import { FeedItem } from '../../../interfaces/feed/feed-item';
import { FeedService } from '../../../services/feed/feed.service';
import { FeedItemImage } from '../../../interfaces/feed/feed-item-image';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  constructor(
    private feedService: FeedService,
    private sanitizer: DomSanitizer
  ) {}

  paragraph1: string =
    'I have some questions about the translation. Can you explain what hl:Ayie means and why it is significant? Also, I noticed the phrase hl:Nyasaye odwaro mondo obed gi Ayie. What does it mean in English? Finally, can you tell me more about hl:Nyuka and its cultural importance?';
  paragraph2: string =
    'This is a translation of a Dholuo paragraph. Ayie is a respected elder among the Luo people. In the dry season, people seek the blessings of Ayie for rain. When it rains, they say Nyasaye odwaro mondo obed gi Ayie. The river Nzoia is important for agriculture. Nyuka is a traditional drink made from fermented sorghum.';

  highlightedParagraphs!: { question: SafeHtml; reply: SafeHtml };

  async ngOnInit() {
    this.highlightedParagraphs = this.feedService.highlightText(
      this.paragraph1,
      this.paragraph2
    );
    this.feedItems = await this.feedService.getFeedItems();
  }

  ngOnDestroy() {}

  ngOnChanges() {}

  ngAfterViewInit() {}

  showFeed: boolean = true;
  showFeedItem: boolean = false;
  showFeedImage: boolean = false;
  activeFeedImage!: FeedItemImage;
  activeFeedItem!: FeedItem;

  // feedItems: Promise<FeedItem[]> = this.feedService.getFeedItems();
  feedItems: FeedItem[] = this.feedService.generateDummyFeedItems();

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
  feedImageClicked(image: FeedItemImage, feedItem: FeedItem) {
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
