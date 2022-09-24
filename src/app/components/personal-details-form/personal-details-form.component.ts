import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastController } from '@ionic/angular';

@Component({
    selector: 'app-personal-details-form',
    templateUrl: './personal-details-form.component.html',
    styleUrls: ['./personal-details-form.component.scss'],
})
export class PersonalDetailsFormComponent implements OnInit {
    personalDetailsForm: FormGroup;
    currentYear = new Date().getFullYear();

    constructor(private toastController: ToastController) {}

    ngOnInit() {
        this.personalDetailsForm = new FormGroup({
            gender: new FormControl('male', Validators.required),
            firstName: new FormControl(null, Validators.required),
            lastName: new FormControl(null, Validators.required),
            dob: new FormControl(null, [
                Validators.required,
                Validators.min(1),
                Validators.max(31),
            ]),
            mob: new FormControl(null, [
                Validators.required,
                Validators.min(1),
                Validators.max(12),
            ]),
            yob: new FormControl(null, [
                Validators.required,
                Validators.min(1900),
                Validators.max(this.currentYear),
            ]),
            nationality: new FormControl(null, Validators.required),
        });
    }

    onSubmit() {
        console.log(this.personalDetailsForm.status);

        if (this.personalDetailsForm.status === 'INVALID') {
            this.presentToast();
            return;
        }
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
