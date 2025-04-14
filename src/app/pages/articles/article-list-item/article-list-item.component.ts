import { Component, Input } from '@angular/core';
import { LocalizeRouterModule } from '@gilsdav/ngx-translate-router';
import { TranslateModule } from '@ngx-translate/core';
import { RouterModule } from '@angular/router';
import { ArticleDto } from '../../../core/services/articles.service';
import { CategoriesPipe } from '../../../core/pipes/categories.pipe';

@Component({
  selector: 'app-article-list-item',
  standalone: true,
  imports: [LocalizeRouterModule, TranslateModule, RouterModule, CategoriesPipe],
  templateUrl: './article-list-item.component.html',
  styleUrl: './article-list-item.component.scss'
})
export class ArticleListItemComponent {
    @Input() article!: ArticleDto;
}
