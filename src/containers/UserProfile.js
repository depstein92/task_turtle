import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Image, Card, Icon, Table } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import UserRecentJobs from './UserRecentJobs';
import Heading from './Heading';
import { Link } from 'react-router-dom';
import actions from '../actions/index';

class UserProfile extends React.Component{
  constructor(props){
    super(props);

    this.state = { data: {} }
  };

  componentDidMount(){
    const { getUserData } = this.props;
    const { username } = this.props.getUserProfile.isLoggedIn;
    getUserData(username);
  };

  renderUserProfile = () => {
    const { user_data } = this.props.userData.payload.data,
          defaultPhoto = 'https://react.semantic-ui.com/images/avatar/large/patrick.png';

    return(
     <Card
      raised={true}
      className={"user-profile"}
      image={user_data[0].profile_picture ? user_data[0].profile_picture : defaultPhoto}
      header={user_data[0].username}
      description={user_data[0].description ? user_data[0].description : 'Place description here'}
      extra={this.renderMessageLink()}
     />
    )
  };

  renderMessageLink = () => {
    const {user_data} = this.props.userData.payload.data;
    return(
    <div className="user-profile-messaging-link">
      <Link to={"/Messaging"}>
        Click here to message {user_data[0].username}!
      </Link>
       <p>{user_data[0].rating ? user_data[0].rating : 'No Current Rating' }</p>
    </div>)

  };

  renderSkillsTable = () => {
    const {skills} = this.props.userData.payload.data;
    console.log(skills);

    if(!skills || !skills.length){
      return(
          <Table collapsing>
       <Table.Header>
         <Table.Row>
         <Table.HeaderCell>
             Skills
         </Table.HeaderCell>
         </Table.Row>
       </Table.Header>
       <Table.Body>
           <Table.Row>
             <Table.Cell>
              No Skills added
             </Table.Cell>
           </Table.Row>
           <Table.Row>
             <Table.Cell>
              No Skills added
             </Table.Cell>
           </Table.Row>
           <Table.Row>
             <Table.Cell>
              No Skills added
             </Table.Cell>
           </Table.Row>
       </Table.Body>
     </Table>
      )
    } else {
      return(
        <Table collapsing>
         <Table.Header>
           <Table.Row>
           <Table.HeaderCell>
               Skills
           </Table.HeaderCell>
           </Table.Row>
         </Table.Header>
         <Table.Body>
         { skills.map((obj, index) => {
           return(
             <Table.Row key={index}>
               <Table.Cell>
                { obj.description }
               </Table.Cell>
             </Table.Row>
           )
         })}
         </Table.Body>
       </Table>
     )
    };
  };

  render(){
    return(
    <div>
      <Heading />
      <div className={'user-profile-container'}>
      { this.renderUserProfile() }
    {// { this.renderSkillsTable() }
    }
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
    userData: state.userData,
    getUserProfile: state.isAuthenticated
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserProfile);
