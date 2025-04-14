import { Component, Input } from '@angular/core';
import { BreadCrumb } from '../../core/services/bread-crumbs.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-bread-crumbs',
  imports: [],
  templateUrl: './bread-crumbs.component.html',
  styleUrl: './bread-crumbs.component.scss'
})
export class BreadCrumbsComponent {

  @Input() breadCrumbs: BreadCrumb[] = [];

  constructor(
    private translate: TranslateService
  ) { }

  getBreadCrumbs() {
    return this.breadCrumbs.map(breadcrumb => ({
      ...breadcrumb,
      label: this.translate.instant(breadcrumb.label)
    }));
  }
}