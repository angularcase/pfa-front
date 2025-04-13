import { Component, OnInit } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { SingleTypeService, ContactDto } from '../../core/services/single-type.service';
import { HeroContactLightComponent } from '../../shared/hero-contact-light/hero-contact-light.component';

@Component({
  selector: 'app-contact',
  imports: [TranslateModule, HeroContactLightComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent implements OnInit {

  contact!: ContactDto;

  constructor(
    private singleTypeService: SingleTypeService,
    private translate: TranslateService
  ) {}

  ngOnInit() {
    const lang = this.translate.currentLang;

    this.singleTypeService.getSingleType('contact', lang).subscribe((contact: ContactDto) => {
      this.contact = contact;
    });
  }
}
