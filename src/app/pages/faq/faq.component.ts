import { Component, OnInit } from '@angular/core';
import { FaqDto } from '../../core/services/faqs.service';
import { FaqsService } from '../../core/services/faqs.service';
import { TranslateService } from '@ngx-translate/core';
import { StrapiResponse } from '../../core/services/articles.service';
import { RouterModule } from '@angular/router';
import { LocalizeRouterModule, LocalizeRouterPipe } from '@gilsdav/ngx-translate-router';

@Component({
  selector: 'app-faq',
  imports: [RouterModule, LocalizeRouterPipe],
  templateUrl: './faq.component.html',
  styleUrl: './faq.component.scss'
})
export class FaqComponent implements OnInit {

  faqs: FaqDto[] = [];

  constructor(
    private faqsService: FaqsService,
    private translate: TranslateService
  ) {
  }

  ngOnInit() {
    this.faqsService.getFaqs(this.translate.currentLang).subscribe((response: StrapiResponse<FaqDto[]>) => {
      console.log(response);
      this.faqs = response.data;
    });
  }

}
