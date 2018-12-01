import axios from 'axios';


const addImageToEditor = (image, title) => {
  return {
    type: 'ADD_PHOTO_SUCCESS',
    payload: { image, title }
  }
};


const addImageToFeedLoading = () => {
  return {
    type: 'ADD_PHOTO_LOADING',
    payload: { isLoading: true }
  }
}

const addImageToFeedFailure = (error) => {
  return {
    type: 'ADD_PHOTO_FAIURE',
    payload: {
      isLoading: false,
      error
    }
  }
}

const addImageToFeed = (narrative, image) => {

  addImageToFeedLoading();

  axios.post('/posts', { /*ADD URL*/
    narrative,
    image
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    addImageToFeedFailure(error);
    console.log(error);
  });

};

export default {
  addImageToEditor,
  addImageToFeed
};
