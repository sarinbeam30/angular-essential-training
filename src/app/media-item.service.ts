import { Injectable } from '@angular/core';

// The `Injectable` decorator is used to mark a clas as an injectable service.
// `@Injectable({ providedIn: 'root' })` --> This line applies the `Injectable` decorator to the class.
// It specifices the service should be provided in the root injector of the application, which means that it will be available to the entire application.

@Injectable({
  providedIn: 'root'
})
export class MediaItemService {
  mediaItems = [
    {
      id: 1,
      name: 'Firebug',
      medium: 'Series',
      category: 'Science Fiction',
      year: 2010,
      watchedOn: 1294166565384,
      isFavorite: false
    },
    {
      id: 2,
      name: 'The Small Tall',
      medium: 'Movies',
      category: 'Comedy',
      year: 2015,
      watchedOn: null,
      isFavorite: true
    }, {
      id: 3,
      name: 'The Redemption',
      medium: 'Movies',
      category: 'Action',
      year: 2016,
      watchedOn: null,
      isFavorite: false
    }, {
      id: 4,
      name: 'Hoopers',
      medium: 'Series',
      category: 'Drama',
      year: null,
      watchedOn: null,
      isFavorite: true
    }, {
      id: 5,
      name: 'Happy Joe: Cheery Road',
      medium: 'Movies',
      category: 'Action',
      year: 2015,
      watchedOn: 1457166565384,
      isFavorite: false
    }
  ];

  get() {
    return this.mediaItems;
  }

  add(mediaItem) {
    this.mediaItems.push(mediaItem);
  }

  delete(mediaItem) {
    const index = this.mediaItems.indexOf(mediaItem);
    if (index >= 0) {
      this.mediaItems.splice(index, 1);
    }
  }
}
