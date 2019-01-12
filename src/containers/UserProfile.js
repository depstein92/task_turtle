import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Image, Card, Icon, Table } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import UserRecentJobs from './UserRecentJobs';
import Heading from './Heading';
import { Link } from 'react-router-dom';
import actions from '../actions/index';
import '../style/UserProfile.scss';

class UserProfile extends React.Component{
  constructor(props){
    super(props);

    this.state = { data: {} }
  };

  componentDidMount(){
  const { getUserData } = this.props;
   getUserData();
  };

  renderUserProfile = () => {
    const { user_data } = this.props.userData.payload.data;
    return(
     <Card
      className={"user-profile"}
      image={user_data[0].profile_picture}
      header={user_data[0].username}
      meta='Friend'
      description={user_data[0].description ? user_data[0].description : 'Place description here'}
      extra={<p>Rating 8 out of 10</p>}
     />
    )
  };

  renderMessageLink = () => {
    const { user_data } = this.props.userData.payload.data;
    return(
    <div className="user-profile-messaging-link">
      <Link to={"/Messaging"}>
        Click here to message {user_data[0].username}!
      </Link>
    </div>)

  };

  renderSkillsTable = () => {
    {
    // const { user_data } = this.props.userData.payload.data;
    // return(
    //   <Table collapsing>
    //    <Table.Header>
    //      <Table.Row>
    //      <Table.HeaderCell>
    //          Skills
    //      </Table.HeaderCell>
    //      </Table.Row>
    //    </Table.Header>
    //    <Table.Body>
    //    { skills.map((obj, index) => {
    //      return(
    //        <Table.Row key={index}>
    //          <Table.Cell>
    //           { obj }
    //          </Table.Cell>
    //        </Table.Row>
    //      )
    //    })}
    //    </Table.Body>
    //  </Table>
    // )
  }

  };

  render(){
    return(
    <div>
      <Heading />
      <div className={'user-profile-container'}>
      { this.renderUserProfile() }
      { this.renderMessageLink() }
      { this.renderSkillsTable() }
      <UserRecentJobs />
      </div>
    </div>
    )
  };
};

const mapDispatchToProps = dispatch => {
 return bindActionCreators({ getUserData: actions["getUserProfileInfo"] }, dispatch);
};


const mapStateToProps = state => {
  return {
    userData: state.userData
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserProfile);
