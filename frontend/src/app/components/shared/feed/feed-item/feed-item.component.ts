import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FeedItem } from '../../../../interfaces/feed/feed-item';
import { FeedService } from '../../../../services/feed/feed.service';
import { FeedItemImage } from '../../../../interfaces/feed/feed-item-image';

@Component({
  selector: 'app-feed-item',
  templateUrl: './feed-item.component.html',
  styleUrl: './feed-item.component.scss',
})
export class FeedItemComponent {
  constructor(private feedService: FeedService) {}
  @Input() feedItem!: FeedItem;

  @Output() onFeedItemClick = new EventEmitter<FeedItem>();
  @Output() onFeedItemLike = new EventEmitter<FeedItem>();
  @Output() onFeedImageClick = new EventEmitter<FeedItemImage>();

  feedClicked(event: Event) {
    event.preventDefault();
    this.onFeedItemClick.emit(this.feedItem);
  }

  imageClicked(event: Event, image: FeedItemImage) {
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
