import React from 'react';
import Preview from './Preview';
import PrePostContainer from './PrePostContainer';
import ImageLine from './ImageLine';


class Home extends React.Component{
  render(){
    return(
      <div className="landing-container">
       <Preview />
       <PrePostContainer />
       <ImageLine />
      </div>
    )
  }
}

export default Home;
