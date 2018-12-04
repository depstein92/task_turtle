const initialState = {
        loading: false,
        data: {},
        error: null
      }

function addImagesToFeedReducer(state=initialState, action){
    switch(action.type){
      case 'ADD_IMAGES_ON_LOAD_SUCCESS':
        debugger;
        return { ...state, data: action.payload, loading: false, error: null }
        break;
      case 'ADD_IMAGES_ON_LOAD_FAILURE':
        return { ...state, data: action.payload, loading: false, error: true }
        break;
      default:
        debugger;
        return { loading: false, data: {}, error: null }
    }
}

export default addImagesToFeedReducer;
