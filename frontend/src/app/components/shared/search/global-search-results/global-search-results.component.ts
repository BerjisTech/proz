import { Component, Input } from '@angular/core';
import { SearchResults } from '../../../../interfaces/search/search-results';

@Component({
  selector: 'app-global-search-results',
  templateUrl: './global-search-results.component.html',
  styleUrl: './global-search-results.component.scss'
})
export class GlobalSearchResultsComponent {
  // Receives input as an instance of searchResult interface
  @Input() searchResult: SearchResults = {
    title: '',
    icon: '',
    url: '',
    description: '',
    type: '',
    date: '',
    tags: [''],
    image: '',
  };

  constructor() { }

}