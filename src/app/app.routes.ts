import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ArticleComponent } from './pages/article/article.component';
import { ArticlesComponent } from './pages/articles/articles.component';
import { TranslateService } from '@ngx-translate/core';
import { Error404Component } from './pages/error-404/error-404.component';
import { inject } from '@angular/core';
import { LocalizeRouterService } from '@gilsdav/ngx-translate-router';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'contact',
        component: ContactComponent
    },
    {
        path: 'article/:slug',
        component: ArticleComponent
    },
    {
        path: 'articles',
        component: ArticlesComponent
    },
    {
        path: '404',
        component: Error404Component
    },
    // {
    //     path: '**',
    //     redirectTo: '/404'
    // }
];
