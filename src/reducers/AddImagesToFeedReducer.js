const initialState = {
        loading: false,
        data: {},
        error: null
}

function addImagesToFeedReducer(state=initialState, action){
    switch(action.type){
      case 'ADD_IMAGES_ON_LOAD_SUCCESS':
        return { ...state, data: action.payload, loading: false, error: null, initialLoad: false }
        break;
      case 'ADD_IMAGES_ON_LOAD_FAILURE':
        return { ...state, data: action.payload, loading: false, error: true, initialLoad: false }
        break;
      case 'ADD_IMAGES_ON_LOAD_LOADING':
        return  { loading: true, data: {},  error: false, initialLoad: false }
        break;
      case 'ADD_IMAGES_TO_FEED_SUCCESS':
        return { ...state, data: action.payload, error: null, loading: false, initialLoad: false }
        break;
      default:
        return { loading: false,  error: false, initialLoad: true };
    }
}

export default addImagesToFeedReducer;
