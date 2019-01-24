import actionNames from '../actions/action_names';

const initialValue = {
  loading: false,
  error: false,
  data: {},
  message: ''
}

export default function Edit_Profile_Reducer(state = initialValue, data) {
    switch (data.type) {
        case actionNames['EDIT_PROFILE_PICTURE_SUCCESS']:
            return {
                payload: data.payload,
                error: false,
                loading: false
            };
            break;
        case actionNames['EDIT_PROFILE_PICTURE_LOADING']:
            return {
                loading: true,
                error: false,
                data: {}
            };
            break;
        case actionNames['EDIT_PROFILE_PICTURE_FAILURE']:
            return {
                loading: false,
                error: data.payload,
                data: []
            };
            break;
        case actionNames['EDIT_PROFILE_DESCRIPTION_SUCCESS']:
            return {
                payload: data.payload,
                error: false,
                loading: false
            };
            break;
        case actionNames['EDIT_PROFILE_DESCRIPTION_LOADING']:
            return {
                loading: true,
                error: false,
                data: []
            };
            break;
        case actionNames['EDIT_PROFILE_DESCRIPTION_FAILURE']:
            return {
                loading: false,
                error: data.payload,
                data: {}
            };
            break;
        default:
            return state;
    };
};
