import React from 'react';
import Preview from './Preview';
import ImageLine from './ImageLine';
import Editor from './Editor';

class Home extends React.Component{
  constructor(props){
    super(props);

    this.state = { isFormDataLoaded: false }
    this.handleIsDataLoaded = this.handleIsDataLoaded.bind(this);
  }

  handleIsDataLoaded = () => {
    this.setState({ isFormDataLoaded: true });
  }

  render(){
    return(
      <div className="landing-container">
       <Preview handleIsDataLoaded={ this.handleIsDataLoaded } />
       <Editor />
       <ImageLine />
      </div>
    )
  }
}

export default Home;
