import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { IconBlockLightComponent } from "../../shared/icon-block-light/icon-block-light.component";
import { PopularArticlesComponent } from "../../shared/popular-articles/popular-articles.component";

@Component({
  selector: 'app-home',
  imports: [TranslateModule, IconBlockLightComponent, PopularArticlesComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
