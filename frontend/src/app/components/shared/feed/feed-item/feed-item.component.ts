import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FeedItem } from '../../../../interfaces/feed/feed-item';

@Component({
  selector: 'app-feed-item',
  templateUrl: './feed-item.component.html',
  styleUrl: './feed-item.component.scss',
})
export class FeedItemComponent {
  @Input() feedItem: FeedItem = {
    id: 'UUID-1234-5678-9101-1121',
    title: '',
    textContent: '',
    images: [],
    date: '',
    user: null,
  };

  @Output() onFeedItemClick = new EventEmitter<FeedItem>();
  @Output() onFeedItemLike = new EventEmitter<FeedItem>();
  @Output() onFeedImageClick = new EventEmitter<string>();

  constructor() {}
  feedClicked(event: Event) {
    event.preventDefault();
    this.onFeedItemClick.emit(this.feedItem);
  }

  imageClicked(event: Event, image: string) {
    event.preventDefault();
    event.stopPropagation();
    this.onFeedImageClick.emit(image);
  }

  likeClicked(event: Event) {
    event.preventDefault();
    event.stopPropagation();
    this.onFeedItemLike.emit(this.feedItem);
  }
}
