import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { map, Observable, tap } from 'rxjs';
import { allSegments, UrlSegments } from '../../app.routes';

@Injectable({
  providedIn: 'root'
})
export class NavigatorService {
  
  private readonly prefix = 'routes';

  constructor(
    private translate: TranslateService
  ) { }

  path(elements: (keyof UrlSegments)[]) {
    const prefix = this.translate.currentLang as 'pl' | 'en';

    // const s =  elements.map(element => allSegments[prefix][element]);

    console.log(prefix);

    elements.forEach(element => {
      console.log(allSegments[prefix][element]);
    });
  }

  setLanguage(lang: string): Observable<boolean> {
    return this.translate.use(lang).pipe(
      map(() => true)
    );
  }
}