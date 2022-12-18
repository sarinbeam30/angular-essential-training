import { Component, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: 'mw-medium-item',
  templateUrl: './media-item.component.html',
  styleUrls: ['./media-item.component.less']
})

export class MediaItemComponent {
  name = 'The Redemption';

  wasWatched() {
    return true;
  }

  @Input() mediumItem;
  @Output() delete = new EventEmitter();

  ngOnInit() {
    console.log(this.mediumItem)
  }

  onDelete() {
    console.log('deleted');
    this.delete.emit(this.mediumItem);
  }
}