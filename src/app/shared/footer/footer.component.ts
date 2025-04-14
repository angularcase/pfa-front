import { Component } from '@angular/core';
import { LocalizeRouterPipe } from '@gilsdav/ngx-translate-router';
import { TranslatePipe } from '@ngx-translate/core';
import { RouterModule } from '@angular/router';
import { LanguagePickerComponent } from "../language-picker/language-picker.component";

@Component({
  selector: 'app-footer',
  imports: [RouterModule, LanguagePickerComponent],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {

}
