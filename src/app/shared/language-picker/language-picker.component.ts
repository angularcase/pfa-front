import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Language } from '../../app.config';
import { LanguagePickerItemComponent } from './language-picker-item/language-picker-item.component';
import { TranslateService } from '@ngx-translate/core';
import { LocalizeRouterService } from '@gilsdav/ngx-translate-router';
import { TranslateModule } from '@ngx-translate/core';
@Component({
  selector: 'app-language-picker',
  imports: [RouterModule, LanguagePickerItemComponent, TranslateModule],
  templateUrl: './language-picker.component.html',
  styleUrl: './language-picker.component.scss'
})
export class LanguagePickerComponent {

  currentLanguage!: Language;

  constructor(
    private localize: LocalizeRouterService,
    private translate: TranslateService) {
      this.currentLanguage = this.localize.parser.currentLang as Language;
      this.localize.routerEvents.subscribe((event: any) => {
        console.log(event);
        this.currentLanguage = event as Language;
      });
    }

  protected allItems: Record<Language, LanguageItem> = {
    [Language.PL]: {
      flag: './assets/vendor/flag-icon-css/flags/1x1/pl.svg',
      label: 'app.shared.languagePicker.pl',
      routerLink: `/${Language.PL}`
    },
    [Language.EN]: {
      flag: './assets/vendor/flag-icon-css/flags/1x1/us.svg',
      label: 'app.shared.languagePicker.en',
      routerLink: `/${Language.EN}`
    }
  }

  getAllItems() {
    return Object.values(this.allItems);
  }

}

export interface LanguageItem {
  flag: string;
  label: string;
  routerLink: string;
}