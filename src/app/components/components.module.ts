import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { PersonalDetailsFormComponent } from './personal-details-form/personal-details-form.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
    declarations: [PersonalDetailsFormComponent],
    exports: [PersonalDetailsFormComponent],
    imports: [CommonModule, IonicModule.forRoot(), ReactiveFormsModule],
})
export class ComponentsModule {}
