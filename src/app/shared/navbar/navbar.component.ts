import { AfterViewInit, Component, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';
import { LocalizeRouterPipe, LocalizeRouterService } from '@gilsdav/ngx-translate-router';

declare var HSMegaMenu: any;
declare var HSShowAnimation: any;
declare var HSBsValidation: any;

@Component({
  selector: 'app-navbar',
  imports: [LocalizeRouterPipe, TranslatePipe, RouterModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent implements AfterViewInit {

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object) {}

  initializeMegaMenu() {
    const megaMenu = new HSMegaMenu('.js-mega-menu', {
      desktop: {
        position: 'left'
      }
    })
  }

  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.initializeMegaMenu();
    }
  }

}
