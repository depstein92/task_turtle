import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Image, Card, Icon } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import actions from '../actions/index';


class UserRecentJobs extends React.Component{
  constructor(props){
    super(props);

    this.state = { data: {} }
  };

  renderJobs = () => {

    const { jobs  } = this.props.userData.isLoggedIn;

   if(!jobs || !jobs.length){
     return(
       <div className={"user-profile-container__user-jobs"}>
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
         <div
          className={"user-profile-container__user-job"}
          key={index}>
            <Card>
              <Card.Content header={`Customer ${obj.client}`} />
              <Card.Content id="title">{`${obj.title}`}</Card.Content>
                <Card.Content extra id="description">
                {obj.description}
                </Card.Content>
              <Card.Content extra id="extra">
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
    <div className={"user-profile-container__recent-jobs"}>
      <h1 className={"recent-jobs__recent-jobs-title"}>
         Recent Jobs
      </h1>
        { this.renderJobs() }
    </div>
    )
  };
};

const mapStateToProps = state => {
  return {
    userData: state.isAuthenticated
  };
};

export default connect(mapStateToProps)(UserRecentJobs);
