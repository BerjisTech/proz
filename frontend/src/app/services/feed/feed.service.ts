import { Injectable } from '@angular/core';
import { FeedItem } from '../../interfaces/feed/feed-item';
import { UUID } from 'crypto';

@Injectable({
  providedIn: 'root'
})
export class FeedService {
  // Fetches feed items from https://localhost:3000/api/v1/feed_items rails api

  constructor() { }

  getFeedItems() {
    return fetch('https://localhost:3000/api/v1/feed_items')
      .then(response => response.json())
      .then(data => data);
  }

  getFeedItem(feedItemId: UUID) {
    return fetch(`https://localhost:3000/api/v1/feed_items/${feedItemId}`)
      .then(response => response.json())
      .then(data => data);
  }

  createFeedItem(feedItem: FeedItem) {
    return fetch('https://localhost:3000/api/v1/feed_items', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(feedItem),
    })
      .then(response => response.json())
      .then(data => data);
  }

  updateFeedItem(feedItem: FeedItem) {
    return fetch(`https://localhost:3000/api/v1/feed_items/${feedItem.id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(feedItem),
    })
      .then(response => response.json())
      .then(data => data);
  }

  deleteFeedItem(feedItemId: UUID) {
    return fetch(`https://localhost:3000/api/v1/feed_items/${feedItemId}`, {
      method: 'DELETE',
    })
      .then(response => response.json())
      .then(data => data);
  }

  likeFeedItem(feedItemId: UUID) {
    return fetch(`https://localhost:3000/api/v1/feed_items/${feedItemId}/like`, {
      method: 'POST',
    })
      .then(response => response.json())
      .then(data => data);
  }

  unlikeFeedItem(feedItemId: UUID) {
    return fetch(`https://localhost:3000/api/v1/feed_items/${feedItemId}/unlike`, {
      method: 'POST',
    })
      .then(response => response.json())
      .then(data => data);
  }

  commentFeedItem(feedItemId: UUID, comment: String) {
    return fetch(`https://localhost:3000/api/v1/feed_items/${feedItemId}/comments`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ comment }),
    })
      .then(response => response.json())
      .then(data => data);
  }

  deleteComment(feedItemId: UUID, commentId: UUID) {
    return fetch(`https://localhost:3000/api/v1/feed_items/${feedItemId}/comments/${commentId}`, {
      method: 'DELETE',
    })
      .then(response => response.json())
      .then(data => data);
  }

  likeComment(feedItemId: UUID, commentId: UUID) {
    return fetch(`https://localhost:3000/api/v1/feed_items/${feedItemId}/comments/${commentId}/like`, {
      method: 'POST',
    })
      .then(response => response.json())
      .then(data => data);
  }

  unlikeComment(feedItemId: UUID, commentId: UUID) {
    return fetch(`https://localhost:3000/api/v1/feed_items/${feedItemId}/comments/${commentId}/unlike`, {
      method: 'POST',
    })
      .then(response => response.json())
      .then(data => data);
  }

  reportFeedItem(feedItemId: UUID) {
    return fetch(`https://localhost:3000/api/v1/feed_items/${feedItemId}/report`, {
      method: 'POST',
    })
      .then(response => response.json())
      .then(data => data);
  }

  reportComment(feedItemId: UUID, commentId: UUID) {
    return fetch(`https://localhost:3000/api/v1/feed_items/${feedItemId}/comments/${commentId}/report`, {
      method: 'POST',
    })
      .then(response => response.json())
      .then(data => data);
  }
}
