import { Component, EventEmitter, Input, Output } from '@angular/core';
import { PaginationResponseDto } from '../../core/services/articles.service';
import { map, Observable, of } from 'rxjs';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-pagination',
  imports: [],
  templateUrl: './pagination.component.html',
  styleUrl: './pagination.component.scss'
})
export class PaginationComponent {

  @Input() pagination!: PaginationResponseDto;
  @Output() action = new EventEmitter<Action>();

  generator() {
    return Array.from({ length: this.pagination.pageCount }, (_, i) => i + 1);
  }

  previous() {
    if (this.pagination.page > 1) {
      this.action.emit(Action.Previous);
    }
  }

  next() {
    if (this.pagination.page < this.pagination.pageCount) {
      this.action.emit(Action.Next);
    }
  }

}

export enum Action {
  Previous = 'Previous',
  Next = 'Next'
}
