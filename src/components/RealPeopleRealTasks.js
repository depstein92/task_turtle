import React from 'react';

const imageOne = 'https://assets.taskrabbit.com/v3/assets/static/homepage/testimonials/testimonial-photo-1@2x-2495b03222007a95e2a87e094b72d593.jpg';
const imageTwo = 'https://assets.taskrabbit.com/v3/assets/static/homepage/testimonials/testimonial-photo-2@2x-f4bee70813dbeb4ccdc5c719de674d6f.jpg';
const imageThree = 'https://assets.taskrabbit.com/v3/assets/static/homepage/testimonials/testimonial-photo-3@2x-99b945392216a4513db6106f61493437.jpg';
const imageFour = 'https://assets.taskrabbit.com/v3/assets/static/homepage/testimonials/testimonial-photo-4@2x-0171e28bf60f8778dd4ef17e03d7ace7.jpg';

export default () => {
  return(
    <section className="landing__real-people-real-tasks">
     <div className="landing__real-people-real-tasks--testimony-left">
      <div className="testimony">
        <img src={imageOne} alt="kates-picture"/>
        <div className="testimony__description">
           <div className="description">
             Lorem ipsum dolor sit amet, consectetur adipisicing elit.
             Vel voluptatem quam fugit magni?
             Distinctio consectetur totam necessitatibus,
             ut veniam! Omnis pariatur dolor nesciunt quas
             et minus cumque sunt veritatis facere.
           </div>
           <div className="name">
             Kate
           </div>
        </div>
      </div>
      <div className="testimony">
        <img src={imageTwo} alt="tommys-picture"/>
        <div className="testimony__description">
          <div className="description">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Vel voluptatem quam fugit magni?
          Distinctio consectetur totam necessitatibus,
          ut veniam! Omnis pariatur dolor nesciunt quas
          et minus cumque sunt veritatis facere.
          </div>
          <div className="name">
            Kevin
          </div>
        </div>
      </div>
    </div>
    <div className="landing__real-people-real-tasks--testimony-right">
      <div className="testimony">
        <img src={imageThree} alt="marge-picture"/>
        <div className="testimony__description">
          <div className="description">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
             Vel voluptatem quam fugit magni?
             Distinctio consectetur totam necessitatibus,
             ut veniam! Omnis pariatur dolor nesciunt quas
             et minus cumque sunt veritatis facere.
          </div>
          <div className="name">
            Bernie
          </div>
        </div>
      </div>
      <div className="testimony">
        <img src={imageFour} alt="lisas-picture"/>
        <div className="testimony__description">
          <div className="description">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Vel voluptatem quam fugit magni?
            Distinctio consectetur totam necessitatibus,
            ut veniam! Omnis pariatur dolor nesciunt quas
            et minus cumque sunt veritatis facere.
          </div>
          <div className="name">
            Lisa
          </div>
        </div>
      </div>
    </div>
    </section>
  )
};
