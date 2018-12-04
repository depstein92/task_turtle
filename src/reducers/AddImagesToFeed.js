const initialState = {
        loading: false,
        data: {},
        error: null
      }

function addImagesToFeed(state=initialState, action){
    switch(action.type){
      case 'ADD_IMAGES_ON_LOAD_SUCCESS':
        return { ...state, data: action.payload, loading: false, error: null }
        break;
      case 'ADD_IMAGES_ON_LOAD_FAILURE':
        return { ...state, data: action.payload, loading: false, error: true }
        break;
      default:
        return state;
    }
}

export default addImagesToFeed;
