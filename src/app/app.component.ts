import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { Apollo, gql } from 'apollo-angular';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TranslateModule, DatePipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{

  date: Date = new Date();
  

  constructor(
    private apollo: Apollo,
    private translate: TranslateService) {
  }

  ngOnInit(): void {
    console.log(this.translate.currentLang);

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
          locale: 'pl'
        }
      })
      .valueChanges
      .subscribe((result: any) => {
        console.log(result);
      });
  }
}
