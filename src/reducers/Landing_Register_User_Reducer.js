import actionNames from '../actions/action_names';

const initialData = {
  loading: false,
  data: { payload: {} },
  error: null
}

function Landing_Register_User_Reducer(state = initialData, data) {
    switch (data.type) {
        case actionNames.REGISTER_USER_SUCCESS:
            return {
                payload: data.payload,
                error: false,
                loading: false
            };
            break;
        case actionNames.REGISTER_USER_LOADING:
            return {
                payload: data.payload,
                loading: true,
                error: false,
            };
            break;
        case actionNames.REGISTER_USER_ERROR:
            return {
                payload: data.payload,
                loading: false,
                error: true
            };
            break;
        default:
            return state;
    }
}
export default Landing_Register_User_Reducer;
