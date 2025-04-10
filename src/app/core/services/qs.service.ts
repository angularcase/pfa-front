import { Injectable } from '@angular/core';
import qs from 'qs';
@Injectable({
  providedIn: 'root'
})
export class QsService {

  constructor() { }

  getQuery(query: any) {
    return qs.stringify(query, { encodeValuesOnly: true });
  }
}
