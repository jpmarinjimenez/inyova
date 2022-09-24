import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { PersonalDetailsFormComponent } from './personal-details-form/personal-details-form.component';

@NgModule({
  declarations: [PersonalDetailsFormComponent],
  exports: [PersonalDetailsFormComponent],
  imports: [CommonModule, IonicModule.forRoot()],
})
export class ComponentsModule {}
