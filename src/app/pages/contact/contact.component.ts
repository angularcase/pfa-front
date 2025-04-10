import { Component, OnInit } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { SingleTypeService, ContactDto } from '../../core/services/single-type.service';

@Component({
  selector: 'app-contact',
  imports: [TranslateModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent implements OnInit {

  contact!: ContactDto;

  constructor(
    private singleTypeService: SingleTypeService
  ) {}

  ngOnInit() {
    this.singleTypeService.getSingleType('contact').subscribe((contact: ContactDto) => {
      this.contact = contact;
    });
  }
}
