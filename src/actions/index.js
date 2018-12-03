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

const addImageToFeed = (title, img, narrative, fontType) => {

  addImageToFeedLoading();

  let payloadObj = `${title}/${img}/${narrative}/${fontType}`,
      url = `http//localhost:8000/api/posts/createPost/` + payloadObj;

  debugger;

  axios.post(url, { /*ADD URL*/
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
