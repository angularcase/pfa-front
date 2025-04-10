import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { map } from 'rxjs/operators';
import { QsService } from './qs.service';

@Injectable({
  providedIn: 'root'
})
export class ArticlesService {

  private apiUrl = environment.strapiApiUrl;

  constructor(
    private http: HttpClient,
    private qs: QsService
  ) { }

  getArticles(locale: string) {
    const query = this.qs.getQuery({
      populate: '*',
      locale: locale
    });

    return this.http.get<StrapiResponse<ArticleDto[]>>(`${this.apiUrl}/articles?${query}`);
  }

  getArticleBySlug(slug: string, locale: string) {
    const query = this.qs.getQuery({
      populate: '*',
      locale: locale,
      filters: {
          slug: {
            $eq: slug,
          },
        },
    });

    return this.http.get<StrapiResponse<ArticleDto[]>>(`${this.apiUrl}/articles?${query}`)
    .pipe(map((response: StrapiResponse<ArticleDto[]>) => {
      if (response.data && response.data.length > 0) {
        return response.data[0];
      }
      throw new Error('Article not found');
    }));
  }
}

export interface StrapiResponse<T> {
  data: T | null;
  meta: {
    pagination: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    }
  },
  error?: {
    status: number;
    name: string;
    message: string;
    details: any
  };
}

export interface ArticleDto {
  title: string;
  slug: string;
  body: string;
  createdAt: string;
  publishedAt: string;
  locale: string;
  id: number;
  documentId: string;
  abstract: string | null;
  categories: CategoryDto[] | null;
  downloads: DownloadDto[] | null;
}

export interface CategoryDto {
  id: number;
  name: string;
  documentId: string;
}

export interface DownloadDto {
  id: number;
  name: string;
  caption: string | null;
  documentId: string;
  url: string;
}


