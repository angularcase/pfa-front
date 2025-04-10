import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { ArticleListItemComponent } from "./article-list-item/article-list-item.component";
import { Article, GetArticlesGQL, GetArticlesQuery } from '../../graphql/generated';
import { ApolloQueryResult } from '@apollo/client/core';

@Component({
  selector: 'app-articles',
  standalone: true,
  imports: [ArticleListItemComponent],
  templateUrl: './articles.component.html',
  styleUrl: './articles.component.scss'
})
export class ArticlesComponent {

  articles: Article[] = [];

  constructor(
    // private apollo: Apollo,
    private getArticlesGQL: GetArticlesGQL,
    private translate: TranslateService,
  ) {
  }

  ngOnInit(): void {
    const lang = this.translate.currentLang;

    this.getArticlesGQL.fetch({ locale: lang }).subscribe((result: ApolloQueryResult<GetArticlesQuery>) => {
      this.articles = result.data.articles.filter((article) => article !== null) as Article[];
      // this.articles.forEach((article) => {
      //   console.log(article?.title);
      // });
    });

    // this.apollo
    //   .watchQuery({
    //     query: gql`
    //       query Articles($locale: I18NLocaleCode) {
    //         articles(locale: $locale) {
    //           body
    //           slug
    //           title
    //         }
    //       }
    //     `,
    //     variables: {
    //       locale: lang
    //     },
    //     fetchPolicy: 'no-cache'
    //   })
    //   .valueChanges
    //   .subscribe((result: any) => {
    //     this.articles = result.data.articles;
    //   });
  }
}
