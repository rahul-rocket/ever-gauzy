import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@gauzy/ui-sdk/i18n';
import { NbSelectModule } from '@nebular/theme';
import { TimeOffPolicySelectComponent } from './time-off-policy-select.component';

@NgModule({
	declarations: [TimeOffPolicySelectComponent],
	imports: [CommonModule, FormsModule, ReactiveFormsModule, NbSelectModule, TranslateModule.forChild()],
	exports: [TimeOffPolicySelectComponent]
})
export class TimeOffPolicySelectModule {}
