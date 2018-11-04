import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form'


class Editor extends React.Component{
  constructor(props){
    super(props)

    this.state = { isObj: false }
  }
  render(){
    console.log(this.props);
    return(
      <div>
      I am editor
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    addImageToEditor: state.addImageReducer
  }
}


export default connect(mapStateToProps)(Editor);
