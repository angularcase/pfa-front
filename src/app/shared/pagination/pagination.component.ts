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

  openPage(page: number) {
    const action: OpenPageAction = { type: ActionType.OpenPage, page: page };
    this.action.emit(action);
  }

  previous() {
    if (this.pagination.page > 1) {
      const action: PreviousAction = { type: ActionType.Previous };
      this.action.emit(action);
    }
  }

  next() {
    if (this.pagination.page < this.pagination.pageCount) {
      const action: NextAction = { type: ActionType.Next };
      this.action.emit(action);
    }
  }

}

export interface Action {
  type: ActionType;
}

export interface OpenPageAction extends Action {
  type: ActionType.OpenPage;
  page: number;
}

export interface PreviousAction extends Action {
  type: ActionType.Previous;
}

export interface NextAction extends Action {
  type: ActionType.Next;
}

export enum ActionType {
  Previous = 'Previous',
  Next = 'Next',
  OpenPage = 'OpenPage'
}
