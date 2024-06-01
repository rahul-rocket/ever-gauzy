import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import {
	NbCardModule,
	NbListModule,
	NbActionsModule,
	NbButtonModule,
	NbIconModule,
	NbDatepickerModule,
	NbInputModule,
	NbSelectModule,
	NbCheckboxModule,
	NbTooltipModule,
	NbBadgeModule,
	NbToggleModule,
	NbTabsetModule,
	NbTagModule
} from '@nebular/theme';
import { CKEditorModule } from 'ckeditor4-angular';
import { TranslateModule } from '@gauzy/ui-sdk/i18n';
import { NgSelectModule } from '@ng-select/ng-select';
import { ThemeModule } from '../../../@theme/theme.module';
import { PublicPageMutationComponent } from './public-page-mutation.component';
import { SkillsInputModule } from '../../skills/skills-input/skills-input.module';
import { LanguageSelectorModule } from '../../language/language-selector/language-selector.module';
import { SkillsService } from '../../../@core/services/skills.service';
import { LanguagesService } from '../../../@core/services/languages.service';

@NgModule({
	imports: [
		SkillsInputModule,
		LanguageSelectorModule,
		ThemeModule,
		FormsModule,
		NbCardModule,
		NbListModule,
		NbActionsModule,
		ReactiveFormsModule,
		NbButtonModule,
		NbIconModule,
		NgSelectModule,
		NbDatepickerModule,
		NbInputModule,
		NbSelectModule,
		NbCheckboxModule,
		NbTooltipModule,
		TranslateModule.forChild(),
		NbBadgeModule,
		NbToggleModule,
		NbTabsetModule,
		CKEditorModule,
		NbTagModule
	],
	declarations: [PublicPageMutationComponent],
	providers: [SkillsService, LanguagesService]
})
export class PublicPageMutationModule {}
