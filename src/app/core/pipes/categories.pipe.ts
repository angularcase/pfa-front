import { Pipe, PipeTransform } from '@angular/core';
import { CategoryDto } from '../services/articles.service';
import { TranslateService } from '@ngx-translate/core';
@Pipe({
  name: 'categories'
})
export class CategoriesPipe implements PipeTransform {

  constructor(private translate: TranslateService) {}

  transform(categories: CategoryDto[] | null): string {
    if (categories && categories.length > 0) {
      return categories.map(category => category.name).join(', ');
    }
    return this.translate.instant('app.core.pipes.categories.noCategories');
  }

}
