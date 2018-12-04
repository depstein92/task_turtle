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

const addImageToFeedSuccess = () => {
   let data = [
     {  "id":1,"title":"'title'",
        "image":"'image'","narrative":"'narrative'",
        "font_type":"'fontType'","created_at":"2018-12-03 06:49:27",
        "updated_at":"2018-12-03 06:49:27"
     },
     {
       "id":2,"title":"'new_title'",
       "image":"'helloooo''",
       "narrative":"'narrative'",
       "font_type":"'fontType'",
       "created_at":"2018-12-04 00:19:02",
       "updated_at":"2018-12-04 00:19:02"
     }
   ];

   return {
     type: 'GET_ALL_POSTS_SUCCESS',
     payload: data;
   }
}


const addImageToFeed = (title, img, narrative, fontType) => {

  addImageToFeedLoading();

  debugger;

  axios({
    method: 'get',
    url: `http//127.0.0.1/api/posts/createPost/${title}/${img}/${narrative}/${fontType}`,
    data: {
      title,
      img,
      narrative,
      fontType
   }
  }).then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    recievedPostFromDB() //////////////////// Until AJAX PROBLEM IS FIXED use dummy
    console.log(error);
  });
};

export default {
  addImageToEditor,
  addImageToFeed
};
