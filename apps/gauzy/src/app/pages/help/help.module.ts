import { NgModule } from '@angular/core';
import { ThemeModule } from '../../@theme/theme.module';
import { NbCardModule, NbButtonModule, NbInputModule } from '@nebular/theme';
import { FormsModule } from '@angular/forms';
import { HelpComponent } from './help.component';
import { HelpRoutingModule } from './help-routing.module';
import { TranslateModule } from '@gauzy/ui-sdk/i18n';

@NgModule({
	imports: [
		HelpRoutingModule,
		ThemeModule,
		NbCardModule,
		FormsModule,
		NbButtonModule,
		NbInputModule,
		TranslateModule.forChild()
	],
	declarations: [HelpComponent]
})
export class HelpModule {}
