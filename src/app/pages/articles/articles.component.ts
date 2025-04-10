import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Apollo, gql } from 'apollo-angular';
import { ArticleListItemComponent } from "./article-list-item/article-list-item.component";

@Component({
  selector: 'app-articles',
  standalone: true,
  imports: [ArticleListItemComponent],
  templateUrl: './articles.component.html',
  styleUrl: './articles.component.scss'
})
export class ArticlesComponent {

  articles: any[] = [];
  constructor(
    private apollo: Apollo,
    private translate: TranslateService) {
  }

  ngOnInit(): void {
    const lang = this.translate.currentLang;

    this.apollo
      .watchQuery({
        query: gql`
          query Articles($locale: I18NLocaleCode) {
            articles(locale: $locale) {
              body
              slug
              title
            }
          }
        `,
        variables: {
          locale: lang
        },
        fetchPolicy: 'no-cache'
      })
      .valueChanges
      .subscribe((result: any) => {
        this.articles = result.data.articles;
      });
  }
}
