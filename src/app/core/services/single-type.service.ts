import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { StrapiResponse } from './articles.service';

@Injectable({
  providedIn: 'root'
})
export class SingleTypeService {

  private apiUrl = environment.strapiApiUrl;

  constructor(private http: HttpClient) { }

  getSingleType<K extends SingleTypeName>(typeName: K): Observable<SingleTypeMap[K]> {
    return this.http.get<StrapiResponse<SingleTypeMap[K]>>(`${this.apiUrl}/${typeName}`)
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

