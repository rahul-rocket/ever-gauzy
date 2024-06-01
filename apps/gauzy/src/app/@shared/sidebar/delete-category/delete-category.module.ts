import { NgModule } from '@angular/core';
import { ThemeModule } from '../../../@theme/theme.module';
import { NbCardModule, NbIconModule, NbButtonModule } from '@nebular/theme';
import { DeleteCategoryComponent } from './delete-category.component';
import { TranslateModule } from '@gauzy/ui-sdk/i18n';

@NgModule({
	imports: [ThemeModule, NbCardModule, NbIconModule, NbButtonModule, TranslateModule.forChild()],
	declarations: [DeleteCategoryComponent],
	exports: [DeleteCategoryComponent]
})
export class DeleteCategoryModule {}
