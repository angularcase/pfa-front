import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class BreadCrumbsService {

  private breadCrumbs: BreadCrumb[] = [];
  private breadCrumbsSubject: BehaviorSubject<BreadCrumb[]> = new BehaviorSubject<BreadCrumb[]>([]);

  constructor() { }

  set(breadCrumbs: BreadCrumb[]) {
    this.breadCrumbs = breadCrumbs;
    this.breadCrumbsSubject.next(this.breadCrumbs);
  }

  get() {
    return this.breadCrumbsSubject.asObservable();
  }
}

export interface BreadCrumb {
  label: string;
  url: string;
  active: boolean;
}

