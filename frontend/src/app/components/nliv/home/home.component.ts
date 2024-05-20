import { Component } from '@angular/core';
import { FeedItem } from '../../../interfaces/feed/feed-item';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  constructor() {}

  ngOnInit() {}

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
  feedItems: FeedItem[] = [
    {
      id: 1,
      title: 'Feed Item 1',
      textContent: 'This is a feed item textContent.',
      images: [
        `https://picsum.photos/${this.randomIntInRange(100,700)}/${this.randomIntInRange(100,700)}?random=${this.randomIntInRange(0,10)}`,
        `https://picsum.photos/${this.randomIntInRange(100,700)}/${this.randomIntInRange(100,700)}?random=${this.randomIntInRange(0,10)}`,
        `https://picsum.photos/${this.randomIntInRange(100,700)}/${this.randomIntInRange(100,700)}?random=${this.randomIntInRange(0,10)}`,
        `https://picsum.photos/${this.randomIntInRange(100,700)}/${this.randomIntInRange(100,700)}?random=${this.randomIntInRange(0,10)}`,
      ],
      date: '2021-01-01',
      user: null,
    },
    {
      id: 2,
      title: 'Feed Item 2',
      textContent: 'This is a feed item textContent.',
      images: [
        `https://picsum.photos/${this.randomIntInRange(100,700)}/${this.randomIntInRange(100,700)}?random=${this.randomIntInRange(0,10)}`,
        `https://picsum.photos/${this.randomIntInRange(100,700)}/${this.randomIntInRange(100,700)}?random=${this.randomIntInRange(0,10)}`,
        `https://picsum.photos/${this.randomIntInRange(100,700)}/${this.randomIntInRange(100,700)}?random=${this.randomIntInRange(0,10)}`,
      ],
      date: '2021-01-02',
      user: null,
    },
    {
      id: 3,
      title: 'Feed Item 3',
      textContent: 'This is a feed item textContent.',
      images: [`https://picsum.photos/${this.randomIntInRange(100,700)}/${this.randomIntInRange(100,700)}?random=${this.randomIntInRange(0,10)}`, `https://picsum.photos/${this.randomIntInRange(100,700)}/${this.randomIntInRange(100,700)}?random=${this.randomIntInRange(0,10)}`],
      date: '2021-01-03',
      user: null,
    },
    {
      id: 4,
      title: 'Feed Item 4',
      textContent: 'This is a feed item textContent.',
      images: [`https://picsum.photos/${this.randomIntInRange(100,700)}/${this.randomIntInRange(100,700)}?random=${this.randomIntInRange(0,10)}`],
      date: '2021-01-04',
      user: null,
    },
    {
      id: 5,
      title: 'Feed Item 5',
      textContent: 'This is a feed item textContent.',
      images: [`https://picsum.photos/${this.randomIntInRange(100,700)}/${this.randomIntInRange(100,700)}?random=${this.randomIntInRange(0,10)}`],
      date: '2021-01-05',
      user: null,
    },
  ];

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
