import { Injectable } from '@angular/core';
import { FeedItem } from '../../interfaces/feed/feed-item';
import { User } from '../../interfaces/user/user';
import { AuthService } from '../user/auth.service';
import { UUID } from 'crypto';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import * as uuid from 'uuid';
import { faker } from '@faker-js/faker';
import { FeedItemImage } from '../../interfaces/feed/feed-item-image';

@Injectable({
  providedIn: 'root',
})
export class FeedService {
  // Fetches feed items from https://localhost:3000/api/v1/feed_items rails api
  constructor(private sanitizer: DomSanitizer, private authService: AuthService) {}

  
  getFeedItems() {
    return fetch('https://localhost:3000/api/v1/feed_items')
      .then((response) => response.json())
      .then((data) => data);
  }

  getFeedItem(feedItemId: UUID) {
    return fetch(`https://localhost:3000/api/v1/feed_items/${feedItemId}`)
      .then((response) => response.json())
      .then((data) => data);
  }

  createFeedItem(feedItem: FeedItem) {
    return fetch('https://localhost:3000/api/v1/feed_items', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(feedItem),
    })
      .then((response) => response.json())
      .then((data) => data);
  }

  updateFeedItem(feedItem: FeedItem) {
    return fetch(`https://localhost:3000/api/v1/feed_items/${feedItem.id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(feedItem),
    })
      .then((response) => response.json())
      .then((data) => data);
  }

  deleteFeedItem(feedItemId: UUID) {
    return fetch(`https://localhost:3000/api/v1/feed_items/${feedItemId}`, {
      method: 'DELETE',
    })
      .then((response) => response.json())
      .then((data) => data);
  }

  likeFeedItem(feedItemId: UUID) {
    return fetch(
      `https://localhost:3000/api/v1/feed_items/${feedItemId}/like`,
      {
        method: 'POST',
      }
    )
      .then((response) => response.json())
      .then((data) => data);
  }

  unlikeFeedItem(feedItemId: UUID) {
    return fetch(
      `https://localhost:3000/api/v1/feed_items/${feedItemId}/unlike`,
      {
        method: 'POST',
      }
    )
      .then((response) => response.json())
      .then((data) => data);
  }

  commentFeedItem(feedItemId: UUID, comment: String) {
    return fetch(
      `https://localhost:3000/api/v1/feed_items/${feedItemId}/comments`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ comment }),
      }
    )
      .then((response) => response.json())
      .then((data) => data);
  }

  deleteComment(feedItemId: UUID, commentId: UUID) {
    return fetch(
      `https://localhost:3000/api/v1/feed_items/${feedItemId}/comments/${commentId}`,
      {
        method: 'DELETE',
      }
    )
      .then((response) => response.json())
      .then((data) => data);
  }

  likeComment(feedItemId: UUID, commentId: UUID) {
    return fetch(
      `https://localhost:3000/api/v1/feed_items/${feedItemId}/comments/${commentId}/like`,
      {
        method: 'POST',
      }
    )
      .then((response) => response.json())
      .then((data) => data);
  }

  unlikeComment(feedItemId: UUID, commentId: UUID) {
    return fetch(
      `https://localhost:3000/api/v1/feed_items/${feedItemId}/comments/${commentId}/unlike`,
      {
        method: 'POST',
      }
    )
      .then((response) => response.json())
      .then((data) => data);
  }

  reportFeedItem(feedItemId: UUID) {
    return fetch(
      `https://localhost:3000/api/v1/feed_items/${feedItemId}/report`,
      {
        method: 'POST',
      }
    )
      .then((response) => response.json())
      .then((data) => data);
  }

  reportComment(feedItemId: UUID, commentId: UUID) {
    return fetch(
      `https://localhost:3000/api/v1/feed_items/${feedItemId}/comments/${commentId}/report`,
      {
        method: 'POST',
      }
    )
      .then((response) => response.json())
      .then((data) => data);
  }

  generateDummyFeedItems() {
    let feedItems: FeedItem[] = [];
    for (let i = 0; i < 10; i++) {
      let feedItem: FeedItem = {
        id: uuid.v4(),
        user: this.authService.generateDummyUser(),
        description: 'This is a feed item content',
        feed_item_images: this.generateDummyFeedImages(),
        item_type: 'Job',
        feed_item_files: [],
        item: {
          title: 'string',
        },
      };
      feedItems.push(feedItem);
    }
    return feedItems;
  }

  generateDummyFeedImages() {
    let shouldGenerate = faker.datatype.boolean();

    if (!shouldGenerate) {
      return [];
    }

    let feedImages: FeedItemImage[] = [];

    let random = faker.datatype.number({ min: 1, max: 10 });

    for (let i = 0; i < random; i++) {
      feedImages.push({
        id: uuid.v4(),
        image: faker.image.url(),
        feed_item_id: uuid.v4(),
      });
    }

    return feedImages;
  }
  
  escapeRegExp(string: string): string {
    return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); // $& means the whole matched string
  }

  highlightText(paragraph1: string, paragraph2: string) {
    let highlightedParagraph1: SafeHtml = '';
    let highlightedParagraph2: SafeHtml = '';

    let p1array = paragraph1.split('hl:');
    let phrasesToHighlight: string[] = [];

    p1array.forEach((element, index) => {
      let elementArray = element.split(' ');
      let searchStart = 0;
      let phraseToHighlight = elementArray[searchStart];

      if (paragraph1.indexOf(`hl:${elementArray[searchStart]}`) == -1) {
        return;
      }
      while (
        paragraph2.includes(
          `${phraseToHighlight} ${elementArray[searchStart + 1]}`
        )
      ) {
        searchStart++;
        phraseToHighlight += ` ${elementArray[searchStart]}`;
      }
      phrasesToHighlight.push(phraseToHighlight);
    });

    // arrange phrasesToHighlight from longest to shortest
    phrasesToHighlight.sort((a, b) => b.length - a.length);

    // Use unique markers for replacements
    let uniqueMarkers = phrasesToHighlight.map((phrase, index) => ({
      phrase,
      marker: `@@@PHRASE_${index}@@@`,
    }));

    // Replace phrases with unique markers in paragraph1 and paragraph2
    let displayParagraph1 = paragraph1;
    let displayParagraph2 = paragraph2;

    uniqueMarkers.forEach(({ phrase, marker }) => {
      const regex = new RegExp(this.escapeRegExp(phrase), 'gi');
      displayParagraph1 = displayParagraph1.replace(regex, marker);
      displayParagraph2 = displayParagraph2.replace(regex, marker);
    });

    // Replace unique markers with highlighted phrases in paragraph1 and paragraph2
    uniqueMarkers.forEach(({ phrase, marker }) => {
      const highlightedText = `<a href="#highlighted_${phrase.replace(
        / /g,
        '_'
      )}" class="border-b-1 border-b-red-400">${phrase}</a>`;
      displayParagraph1 = displayParagraph1.replace(
        new RegExp(this.escapeRegExp(marker), 'g'),
        highlightedText
      );
      displayParagraph2 = displayParagraph2.replace(
        new RegExp(this.escapeRegExp(marker), 'g'),
        highlightedText
      );
    });

    // Remove hl: markers from paragraph1 for display
    displayParagraph1 = displayParagraph1
      .replace(/hl:/g, '')
      .replace(/"#highlighted_/g, '"#highlighted_original_');

    highlightedParagraph1 =
      this.sanitizer.bypassSecurityTrustHtml(displayParagraph1);
    highlightedParagraph2 =
      this.sanitizer.bypassSecurityTrustHtml(displayParagraph2);

    return { 'question': highlightedParagraph1, 'reply': highlightedParagraph2};
  }
}
