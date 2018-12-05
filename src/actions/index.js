import axios from 'axios';

const addImageToEditor = (image, title) => {
  return {
    type: 'ADD_PHOTO_SUCCESS',
    payload: { image, title }
  }
};


const addImagesToFeedOnLoadSuccess =  async () => { //////////////////////////////////MOCK//////////////////
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

  //The CORS settings need to be setup in the API to allow access from your React app domain
  //It needs to be ser up in Laravel
  //https://packagist.org/packages/barryvdh/laravel-cors
  const data2 = await fetch('localhost:8000/api/posts/showAll') //CORS ERROR
                      .then(obj => console.log(obj))
                      .catch(obj => console.log(obj));
  debugger;
  return {
    type: 'ADD_IMAGES_ON_LOAD_SUCCESS',
    payload: data
  }
}

const addImagesToFeedOnLoadFailure = () => {
  return {
    type: 'ADD_IMAGES_ON_LOAD_FAILURE',
    payload: 'Add Images on load failed'
  }
}


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

const addImageToFeedSuccess = () => { //////////////////////////////////MOCK//////////////////
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
     },
     {
       "id":2,"ADDtitle":"'new_title'",
       "image":"'ADDIMAGE''",
       "narrative":"'ADDnarrative'",
       "font_type":"'ADDfontType'",
       "created_at":"2018-12-04 00:19:02",
       "updated_at":"2018-12-04 00:19:02"
     },

   ];


   return {
     type: 'ADD_IMAGES_ON_LOAD_SUCCESS',
     payload: data
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
    addImageToFeedSuccess(); //////////////////// Until AJAX PROBLEM IS FIXED use dummy
    console.log(error);
  });
};

export default {
  addImageToEditor,
  addImageToFeed,
  addImagesToFeedOnLoadSuccess
};
