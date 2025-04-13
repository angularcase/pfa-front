import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { LocalizeRouterModule } from '@gilsdav/ngx-translate-router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { NavbarComponent } from "./shared/navbar/navbar.component";
import { FooterComponent } from "./shared/footer/footer.component";
import { NewsletterComponent } from './shared/newsletter/newsletter.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TranslateModule, LocalizeRouterModule, RouterModule, NavbarComponent, FooterComponent, NewsletterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{

  ngOnInit(): void {
  }

}
