import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
    selector: 'app-personal-details-form',
    templateUrl: './personal-details-form.component.html',
    styleUrls: ['./personal-details-form.component.scss'],
})
export class PersonalDetailsFormComponent implements OnInit {
    personalDetailsForm: FormGroup;

    constructor() {}

    ngOnInit() {
        this.personalDetailsForm = new FormGroup({
            gender: new FormControl('male'),
            firstName: new FormControl(null),
            lastName: new FormControl(null),
            dob: new FormControl(null),
            mob: new FormControl(null),
            yob: new FormControl(null),
            nationality: new FormControl(null),
        });
    }

    onSubmit() {}
}
