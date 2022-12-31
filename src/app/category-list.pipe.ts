import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: 'categoryList'
})

export class CategoryListPipe implements PipeTransform {
  transform(mediaItems) {
    const categories = [];
    mediaItems.forEach(mediaItem => {
      // console.log('[category-list.pipe.ts] debug-1 : ' , categories.indexOf(mediaItem.category));
      if (categories.indexOf(mediaItem.category) <= -1) {
        // console.log('[category-list.pipe.ts] debug-2 : ' , mediaItem.category);
        categories.push(mediaItem.category);
      }
    });

    // console.log('[category-list.pipe.ts] debug-3 : ' ,categories.join(', '));
    return categories.join(', ');
  }
}