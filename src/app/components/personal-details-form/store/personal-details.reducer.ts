import * as PersonalDetailsActions from './personal-details.actions';
import { PersonalDetails } from '../../../interfaces/interfaces';

const initialState: PersonalDetails = {
    gender: 'male',
    firstName: '',
    lastName: '',
    dob: null,
    mob: null,
    yob: null,
    nationality: '',
};

const retrieveState = () => localStorage.getItem('state');

export const personalDetailsReducer = (
    state = initialState,
    action: PersonalDetailsActions.SavePersonalDetails
) => {
    switch (action.type) {
        case PersonalDetailsActions.SAVE_PERSONAL_DETAILS:
            return {
                ...state,
                gender: action.payload.gender,
                firstName: action.payload.firstName,
                lastName: action.payload.lastName,
                dob: action.payload.dob,
                mob: action.payload.mob,
                yob: action.payload.yob,
                nationality: action.payload.nationality,
            };
        default:
            if (retrieveState()) {
                const newState = JSON.parse(retrieveState());
                return newState;
            } else {
                return initialState;
            }
    }
};
