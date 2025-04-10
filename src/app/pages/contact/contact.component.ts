import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core'; 
import { Apollo, gql } from 'apollo-angular';

const GRAPHQL_QUERY = gql`
  query Contact($locale: I18NLocaleCode) {
    contact(locale: $locale) {
      phone
    }
  }
`;

@Component({
  selector: 'app-contact',
  imports: [TranslateModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {

  contact: any;

  constructor(private apollo: Apollo) {}

  ngOnInit() {
    this.apollo.query({
      query: GRAPHQL_QUERY,
      variables: { locale: 'pl' }
    }).subscribe((result: any) => {
      this.contact = result.data.contact;
    });
  }
}
