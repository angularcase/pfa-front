import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { IconBlockLightComponent } from "../../shared/icon-block-light/icon-block-light.component";
@Component({
  selector: 'app-home',
  imports: [TranslateModule, IconBlockLightComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
