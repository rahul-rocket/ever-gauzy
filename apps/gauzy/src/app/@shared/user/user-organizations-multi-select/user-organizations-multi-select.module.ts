import { NgModule } from '@angular/core';
import { NbSelectModule } from '@nebular/theme';
import { ThemeModule } from '../../../@theme/theme.module';
import { TranslateModule } from '@gauzy/ui-sdk/i18n';
import { UserOrganizationsSelectComponent } from './user-organizations-multi-select.component';

@NgModule({
	imports: [ThemeModule, NbSelectModule, TranslateModule.forChild()],
	declarations: [UserOrganizationsSelectComponent],
	exports: [UserOrganizationsSelectComponent],
	providers: []
})
export class UserOrganizationsMultiSelectModule {}
