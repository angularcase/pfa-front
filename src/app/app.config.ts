import { ApplicationConfig, provideZoneChangeDetection, inject } from '@angular/core';
import { provideRouter, withComponentInputBinding, withDisabledInitialNavigation } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { HttpClient, provideHttpClient, withFetch } from '@angular/common/http';
import { provideApollo } from 'apollo-angular';
import { HttpLink } from 'apollo-angular/http';
import { InMemoryCache } from '@apollo/client/core';
import { environment } from '../environments/environment';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';

import { provideTranslateService, TranslateLoader, TranslateService } from '@ngx-translate/core';

import { LocalizeParser, LocalizeRouterSettings, ManualParserLoader, withLocalizeRouter } from '@gilsdav/ngx-translate-router';
import { Location } from '@angular/common';

const httpLoaderFactory: (http: HttpClient) => TranslateHttpLoader = (http: HttpClient) =>
  new TranslateHttpLoader(http, './i18n/', '.json');

export function createTranslateRouteLoader(
  translate: TranslateService,
  location: Location,
  localizeSettings: LocalizeRouterSettings
) {
  return new ManualParserLoader(translate, location, localizeSettings, ['pl', 'en']);
}

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }), 
    // provideClientHydration(withEventReplay()),
    provideTranslateService({
      defaultLanguage: 'pl',
      loader: {
        provide: TranslateLoader,
        useFactory: httpLoaderFactory,
        deps: [HttpClient],
      },
     }),
    provideHttpClient(withFetch()),
    provideApollo(() => {
      const httpLink = inject(HttpLink);

      return {
        link: httpLink.create({
          uri: environment.apolloUrl,
        }),
        cache: new InMemoryCache(),
      };
    }),
    provideRouter(
      routes,
      withComponentInputBinding(),
      withDisabledInitialNavigation(),
      withLocalizeRouter(routes, {
        alwaysSetPrefix: true,
        parser: {
          provide: LocalizeParser,
          useFactory: (createTranslateRouteLoader),
          deps: [TranslateService, Location, LocalizeRouterSettings]
        },
        initialNavigation: true
      })
    ),
  
  ]
};
