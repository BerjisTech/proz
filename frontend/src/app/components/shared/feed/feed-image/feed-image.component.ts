import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FeedItem } from '../../../../interfaces/feed/feed-item';

@Component({
  selector: 'app-feed-image',
  templateUrl: './feed-image.component.html',
  styleUrl: './feed-image.component.scss',
})
export class FeedImageComponent {
  @Input() feedItem: FeedItem = {
    id: 'UUID-1234-5678-9101-1121',
    title: '',
    textContent: '',
    images: [],
    date: '',
    user: null,
  };
  @Input() activeImage: string = '';
  @Output() onImageClose = new EventEmitter();
  constructor() {}

  closeImageView() {
    this.onImageClose.emit();
  }
  feedImageClicked(image: string) {
    this.activeImage = image;
  }
}
