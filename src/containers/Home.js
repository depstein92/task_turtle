import React from 'react';
import Preview from './Preview';
import ImageLine from './ImageLine';


class Home extends React.Component{
  render(){
    return(
      <div className="landing-container">
       <Preview />
       <ImageLine />
      </div>
    )
  }
}

export default Home;
