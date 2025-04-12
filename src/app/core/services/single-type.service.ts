import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { StrapiResponse } from './articles.service';
import { QsService } from './qs.service';
@Injectable({
  providedIn: 'root'
})
export class SingleTypeService {

  private apiUrl = environment.strapiApiUrl;

  constructor(private http: HttpClient, private qs: QsService) { }

  getSingleType<K extends SingleTypeName>(typeName: K, locale: string): Observable<SingleTypeMap[K]> {
    const query = this.qs.getQuery({
      populate: '*',
      locale: locale,
    });

    return this.http.get<StrapiResponse<SingleTypeMap[K]>>(`${this.apiUrl}/${typeName}?${query}`)
    .pipe(map((response: StrapiResponse<SingleTypeMap[K]>) => {
      return response.data;
    }));
  }
}

export interface ContactDto {
  phone: string;
}

export interface AboutDto {
  title: string;
}

export type SingleTypeName = 'contact' | 'about';

export interface SingleTypeMap {
  contact: ContactDto;
  about: AboutDto;
}

