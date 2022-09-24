import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastController } from '@ionic/angular';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { PersonalDetails } from '../../interfaces/interfaces';
import * as PersonalDetailsActions from './store/personal-details.actions';

@Component({
    selector: 'app-personal-details-form',
    templateUrl: './personal-details-form.component.html',
    styleUrls: ['./personal-details-form.component.scss'],
})
export class PersonalDetailsFormComponent implements OnInit {
    personalDetailsForm: FormGroup;
    currentYear = new Date().getFullYear();
    personalDetails: Observable<PersonalDetails>;

    constructor(
        private toastController: ToastController,
        private store: Store<{ personalDetails: PersonalDetails }>
    ) {}

    ngOnInit() {
        this.personalDetails = this.store.select('personalDetails');

        this.personalDetails.subscribe((data) => {
            localStorage.setItem('state', JSON.stringify(data));

            this.personalDetailsForm = new FormGroup({
                gender: new FormControl(data.gender, Validators.required),
                firstName: new FormControl(data.firstName, Validators.required),
                lastName: new FormControl(data.lastName, Validators.required),
                dob: new FormControl(data.dob, [
                    Validators.required,
                    Validators.min(1),
                    Validators.max(31),
                ]),
                mob: new FormControl(data.mob, [
                    Validators.required,
                    Validators.min(1),
                    Validators.max(12),
                ]),
                yob: new FormControl(data.yob, [
                    Validators.required,
                    Validators.min(1900),
                    Validators.max(this.currentYear),
                ]),
                nationality: new FormControl(
                    data.nationality,
                    Validators.required
                ),
            });
        });
    }

    onSubmit() {
        console.log(this.personalDetailsForm);

        if (this.personalDetailsForm.status === 'INVALID') {
            this.presentToast();
            return;
        }

        this.store.dispatch(
            new PersonalDetailsActions.SavePersonalDetails(
                this.personalDetailsForm.value
            )
        );
    }

    async presentToast() {
        const toast = await this.toastController.create({
            message: 'Some fields are missing',
            duration: 5000,
            position: 'bottom',
            cssClass: 'custom-toast',
        });

        await toast.present();
    }
}
