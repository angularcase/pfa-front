import { Component, Input } from '@angular/core';
import { LocalizeRouterModule } from '@gilsdav/ngx-translate-router';
import { TranslateModule } from '@ngx-translate/core';
import { RouterModule } from '@angular/router';
import { ArticleDto } from '../../../core/services/articles.service';

@Component({
  selector: 'app-article-list-item',
  standalone: true,
  imports: [LocalizeRouterModule, TranslateModule, RouterModule],
  templateUrl: './article-list-item.component.html',
  styleUrl: './article-list-item.component.scss'
})
export class ArticleListItemComponent {
    @Input() article!: ArticleDto;
}
