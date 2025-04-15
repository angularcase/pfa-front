import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LocalizeRouterPipe } from '@gilsdav/ngx-translate-router';
@Component({
  selector: 'app-cto-contact-us-airplane',
  imports: [RouterLink, LocalizeRouterPipe],
  templateUrl: './cto-contact-us-airplane.component.html',
  styleUrl: './cto-contact-us-airplane.component.scss'
})
export class CtoContactUsAirplaneComponent {

}
