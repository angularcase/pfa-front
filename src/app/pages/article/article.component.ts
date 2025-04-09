import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-article',
  imports: [],
  templateUrl: './article.component.html',
  styleUrl: './article.component.scss'
})
export class ArticleComponent implements OnInit {

  @Input() id!: string;

  ngOnInit() {
    console.log(this.id);
  }
}
