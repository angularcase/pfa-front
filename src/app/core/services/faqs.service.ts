import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { QsService } from './qs.service';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { StrapiResponse } from './articles.service';

@Injectable({
  providedIn: 'root'
})
export class FaqsService {

  private apiUrl = environment.strapiApiUrl;

  constructor(
    private http: HttpClient,
    private qs: QsService 
  ) { }

  getFaqs(locale: string): Observable<StrapiResponse<FaqDto[]>> {
    const query = this.qs.getQuery({
      populate: '*',
      locale: locale
    });
    return this.http.get<StrapiResponse<FaqDto[]>>(`${this.apiUrl}/faqs?${query}`);
  }
}

export interface FaqDto {
  question: string;
  answer: string;
}
