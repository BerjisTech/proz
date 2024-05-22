import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FeedItem } from '../../../../interfaces/feed/feed-item';
import { FeedService } from '../../../../services/feed/feed.service';
import { FeedItemImage } from '../../../../interfaces/feed/feed-item-image';

@Component({
  selector: 'app-feed-image',
  templateUrl: './feed-image.component.html',
  styleUrl: './feed-image.component.scss',
})
export class FeedImageComponent {
  constructor( private feedService: FeedService) {}

  @Input() feedItem!: FeedItem;
  @Input() activeImage!: FeedItemImage;
  @Output() onImageClose = new EventEmitter();

  closeImageView() {
    this.onImageClose.emit();
  }
  feedImageClicked(image: FeedItemImage) {
    this.activeImage = image;
  }
}
