import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Apollo, gql } from 'apollo-angular';

@Component({
  selector: 'app-articles',
  imports: [],
  templateUrl: './articles.component.html',
  styleUrl: './articles.component.scss'
})
export class ArticlesComponent {
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
        }
      })
      .valueChanges
      .subscribe((result: any) => {
        console.log(result.data.articles);
      });
  }
}
