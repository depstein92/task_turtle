import React, {Component} from 'react';
import { StyleSheet, css } from 'aphrodite';
import { connect } from 'react-redux';


class PrePostContainer extends React.Component{
  constructor(props){
    super(props);
    this.state={ blah: 0 }
  }

  render(){
    //console.log(this.props.formData);
    return(
      <div className={css(styles.prepost_container)}>Pre Post</div>
    )
  }
}

const styles = StyleSheet.create({
  prepost_container: {
    backgroundColor: 'aliceblue',
    textAlign: 'center',
    height: '60vh'
  }
})

const mapStateToProps = (state) => {
  return {
    formData: state.form
  }
}

export default connect(mapStateToProps)(PrePostContainer);
