import { Component, Input, OnInit } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { Apollo, gql } from 'apollo-angular';

@Component({
  selector: 'app-article',
  imports: [TranslateModule],
  templateUrl: './article.component.html',
  styleUrl: './article.component.scss'
})
export class ArticleComponent implements OnInit {

  @Input() slug!: string;

  article: any;

  constructor(
    private apollo: Apollo,
    private translate: TranslateService
  ) { }

  ngOnInit() {
    const lang = this.translate.currentLang;

    this.apollo
      .watchQuery({
        query: gql`
          query Articles($filters: ArticleFiltersInput, $locale: I18NLocaleCode) {
            articles(filters: $filters, locale: $locale) {
              body
              title
              slug
            }
          }
        `,
        variables: {
          filters: {
            slug: {
              eq: this.slug
            }
          },
          locale: lang
        },
        fetchPolicy: 'no-cache'
      })
      .valueChanges
      .subscribe((result: any) => {
        console.log(result.data.articles);
        this.article = result.data.articles[0];
      });
  }
}
