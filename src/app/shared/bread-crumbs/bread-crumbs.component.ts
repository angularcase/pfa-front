import { Component, Input, OnInit } from '@angular/core';
import { BreadCrumb } from '../../core/services/bread-crumbs.service';
import { TranslateService } from '@ngx-translate/core';
import { of } from 'rxjs';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-bread-crumbs',
  imports: [AsyncPipe],
  templateUrl: './bread-crumbs.component.html',
  styleUrl: './bread-crumbs.component.scss'
})
export class BreadCrumbsComponent implements OnInit {

  @Input() breadCrumbs!: Observable<BreadCrumb[]>;

  constructor(
    private translate: TranslateService
  ) { }

  ngOnInit(): void {
  }
}