import { AfterViewInit, Component, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
declare var HSMegaMenu: any;
declare var HSShowAnimation: any;
declare var HSBsValidation: any;

@Component({
  selector: 'app-navbar',
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent implements AfterViewInit {

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  initializeMegaMenu() {
    const megaMenu = new HSMegaMenu('.js-mega-menu', {
      desktop: {
        position: 'left'
      }
    })
    


    // INITIALIZATION OF SHOW ANIMATIONS
    // =======================================================
    // new HSShowAnimation('.js-animation-link')


    // INITIALIZATION OF BOOTSTRAP VALIDATION
    // =======================================================
    // HSBsValidation.init('.js-validate', {
    //   onSubmit: (data: any) => {
    //     data.event.preventDefault()
    //     alert('Submited')
    //   }
    // })
  }

  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.initializeMegaMenu();
    }
  }

}
