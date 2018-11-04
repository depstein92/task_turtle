const initialState = {
        loading: false,
        data: null,
        error: null
      }

function addImageReducer(state=initialState, action){
    switch(action.type){
      case 'ADD_PHOTO_SUCCESS':
        return { ...state, data: action.payload, loading: false, error: null }
        break;
      case 'ADD_PHOTO_SUCCESS_ERROR':
        return { ...state, data: action.payload, loading: false, error: true }
        break;
      default:
        return state;
    }
}

export default addImageReducer;
