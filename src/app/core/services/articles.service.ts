import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { map } from 'rxjs/operators';
import { QsService } from './qs.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ArticlesService {

  private apiUrl = environment.strapiApiUrl;

  constructor(
    private http: HttpClient,
    private qs: QsService
  ) { }

  update(documentId: string, locale: string, dto: Partial<ArticleDto>) {
    const query = this.qs.getQuery({
      locale: locale
    });
    const request: ArticleUpdateRequestDto = {
      data: dto
    }
    return this.http.put<ArticleDto>(`${this.apiUrl}/articles/${documentId}?${query}`, request);
  }

  getArticles(locale: string, pagination?: PaginationRequestDto): Observable<StrapiResponse<ArticleDto[]>> {
    let queryParams = {
      populate: '*',
      locale: locale,
      pagination: pagination
    };

    const query = this.qs.getQuery(queryParams);

    return this.http.get<StrapiResponse<ArticleDto[]>>(`${this.apiUrl}/articles?${query}`);
  }

  getArticleBySlug(slug: string, locale: string): Observable<ArticleDto> {
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
        response.data[0].helpful = response.data[0].helpful ?? 0;
        response.data[0].notHelpful = response.data[0].notHelpful ?? 0;

        return response.data[0];
      }
      throw new Error('Article not found');
    }));
  }
}

export interface PaginationRequestDto {
  page: number;
  pageSize: number;
}

export interface PaginationResponseDto {
  page: number;
  pageSize: number;
  pageCount: number;
  total: number;
}

export interface StrapiResponse<T> {
  data: T;
  meta: {
    pagination: PaginationResponseDto;
  },
  error?: {
    status: number;
    name: string;
    message: string;
    details: any
  };
}

export interface HelpfulnessDto {
  helpful: number;
}

export interface NotHelpfulDto {
  notHelpful: number;
}

export interface ArticleUpdateRequestDto {
  data: Partial<ArticleDto>;
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
  helpful: number;
  notHelpful: number;
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


