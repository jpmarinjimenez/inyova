import { Action } from '@ngrx/store';
import { PersonalDetails } from '../../../interfaces/interfaces';

export const SAVE_PERSONAL_DETAILS = 'SAVE_PERSONAL_DETAILS';

export class SavePersonalDetails implements Action {
    readonly type = SAVE_PERSONAL_DETAILS;

    constructor(public payload: PersonalDetails) {}
}
