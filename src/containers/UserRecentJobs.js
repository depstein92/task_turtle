import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Image, Card, Icon } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import actions from '../actions/index';
import '../style/UserProfile.scss';


class UserRecentJobs extends React.Component{
  constructor(props){
    super(props);

    this.state = { data: {} }
  };

  renderJobs = () => {

    const { jobs } = this.props.userData.payload.data;

    if(!jobs || !jobs.length){
      return(
      <div className={"jobs-completed-post"}>
        <Card>
          <Card.Content>
          No Jobs Available
          </Card.Content>
        </Card>
        <Card>
          <Card.Content>
          No Jobs Available
          </Card.Content>
        </Card>
        <Card>
          <Card.Content>
          No Jobs Available
          </Card.Content>
        </Card>
      </div>
      )
    } else {
      return jobs.map((obj, index) => {
        return(
       <div className={"jobs-completed-post"} key={index}>
          <Card>
            <Card.Content header={`Customer ${obj.client}`} />
            <Card.Content header={`${obj.title}`} />
              <Card.Content extra>
              {obj.description}
              </Card.Content>
            <Card.Content extra>
              <Icon name='star outline' />
              <p>Rating: {obj.rating}</p>
              <p>Date: {obj.date}</p>
            </Card.Content>
         </Card>
        </div>
      )
    })
   }
 }

  render(){
    return(
    <div className={"user-recent-job-container"}>
    <h1 className={"user-recent-job-title"}>
       Recent Jobs
    </h1>
      { this.renderJobs() }
    </div>
    )
  };
};

const mapStateToProps = state => {
  return {
    userData: state.userData
  };
};

export default connect(mapStateToProps)(UserRecentJobs);
