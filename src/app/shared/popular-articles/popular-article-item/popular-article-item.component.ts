import { Component, Input } from '@angular/core';
import { ArticleDto } from '../../../core/services/articles.service';
import { RouterLink } from '@angular/router';
import { LocalizeRouterModule } from '@gilsdav/ngx-translate-router';

@Component({
  selector: 'app-popular-article-item',
  imports: [RouterLink, LocalizeRouterModule],
  templateUrl: './popular-article-item.component.html',
  styleUrl: './popular-article-item.component.scss'
})
export class PopularArticleItemComponent {

  @Input() article!: ArticleDto;

}
