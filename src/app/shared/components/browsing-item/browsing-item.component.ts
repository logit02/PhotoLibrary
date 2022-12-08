import {Component, EventEmitter, Input, Output} from '@angular/core';


@Component({
  selector: 'app-browsing-item',
  templateUrl: './browsing-item.component.html',
})
export class BrowsingItemComponent {
  @Input() item: any;
  @Input() itemId: number = -1;
  @Input() allowRouting: boolean = false;
  @Output() imageSavingEvent = new EventEmitter();

  addToFavorites(): void {
    this.imageSavingEvent.emit(this.item);
  }
}
