import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BreadCrumbsService {

  private breadCrumbs: BreadCrumb[] = [];

  constructor() { }

  set(breadCrumbs: BreadCrumb[]) {
    this.breadCrumbs = breadCrumbs;
  }

  get() {
    return this.breadCrumbs;
  }
}

export interface BreadCrumb {
  label: string;
  url: string;
  active: boolean;
}

