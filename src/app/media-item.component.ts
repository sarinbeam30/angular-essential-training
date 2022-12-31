import { Component, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: 'mw-media-item',
  templateUrl: './media-item.component.html',
  styleUrls: ['./media-item.component.css']
})

export class MediaItemComponent {

  wasWatched() {
    return true;
  }

  @Input() mediaItem;
  @Output() delete = new EventEmitter();

  ngOnInit() {
    // console.log(`[media-item-components]`, this.mediaItem)
  }

  onDelete() {
    console.log('deleted');
    this.delete.emit(this.mediaItem);
  }
}