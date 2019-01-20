import React from 'react';

const imageOne = 'https://assets.taskrabbit.com/v3/assets/static/homepage/how_it_works/step_1-59268ae9c0bf23d365715d3d974a0947.svg'
const imageTwo = 'https://assets.taskrabbit.com/v3/assets/static/homepage/how_it_works/step_2-13d469cb04809cde3793a6bf2f6e8005.svg'
const imageThree = 'https://assets.taskrabbit.com/v3/assets/static/homepage/how_it_works/step_3-fd7acee425e988dcc42adda5a79423dd.svg'

export default () => {
  return(
    <div className="landing__how-it-works">
     <div className="step">
      <div className="step-description">
         <div className="number-container">
          <span className="number">1</span>
         </div>
         <h1 className="title">Lorem Ipsum..</h1>
         <div className="description">
          Lorem ipsum dolor sit amet,
          consectetur adipisicing elit.
          Eveniet sed, ullam facilis est enim numquam itaque, dolorum laboriosam
          possimus magni commodi modi natus. Velit dolore officia
          iste eveniet ea corporis.
         </div>
      </div>
      <div className="step-description">
        <div className="number-container" tag="two">
          <span className="number">2</span>
         </div>
         <h1 className="title">Lorem Ipsum..</h1>
         <div className="description">
           Lorem ipsum dolor sit amet,
           consectetur adipisicing elit.
           Eveniet sed, ullam facilis est enim numquam itaque, dolorum laboriosam
           possimus magni commodi modi natus. Velit dolore officia
           iste eveniet ea corporis.
         </div>
      </div>
      <div className="step-description">
        <div className="number-container" tag="three">
          <span className="number">3</span>
         </div>
         <h1 className="title">Lorem Ipsum..</h1>
         <div className="description">
         Lorem ipsum dolor sit amet,
         consectetur adipisicing elit.
         Eveniet sed, ullam facilis est enim numquam itaque, dolorum laboriosam
         possimus magni commodi modi natus. Velit dolore officia
         iste eveniet ea corporis.
         </div>
      </div>
    </div>
    <div className="image">
        <div className="image-container">
          <img src={`${imageOne}`} alt="tv-image"/>
        </div>
        <div className="image-container">
          <img src={`${imageTwo}`} alt=""/>
        </div>
        <div className="image-container">
          <img src={`${imageThree}`} alt=""/>
        </div>
      </div>
     </div>
  )
};
