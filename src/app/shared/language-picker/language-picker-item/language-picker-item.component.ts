import { Component, Input } from '@angular/core';
import { LanguageItem } from '../language-picker.component';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
@Component({
  selector: 'app-language-picker-item',
  imports: [RouterModule, TranslateModule],
  templateUrl: './language-picker-item.component.html',
  styleUrl: './language-picker-item.component.scss'
})
export class LanguagePickerItemComponent {

  @Input() item!: LanguageItem;

}
