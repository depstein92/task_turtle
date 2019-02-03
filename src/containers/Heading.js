import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, Header, Image } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import * as Scroll from 'react-scroll';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import actions from '../actions/index';

class Heading extends React.Component{

  constructor(props){
    super(props);

    this.state = {
      activeItem: 'home',
    };
  }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  handleLogOutButton = (e, { name }) => {
    let { logOutUser } = this.props;
    logOutUser();
    this.setState({ activeItem: name });
  };

  render() {
    const { activeItem } = this.state;
    const { user_data  } = this.props.userData.isLoggedIn;
    const { newMessage } = this.props;

    const defaultPhoto = 'https://react.semantic-ui.com/images/avatar/large/patrick.png';

    return (
      <div data-test='heading' className='heading'>
       <Menu pointing secondary id={'heading-menu'} style={{ "height": "100px"}}>
          <Menu.Menu position='left' className={"heading-menu-profile-image"}>
              <Header as='h2'>
              <Image circular src={user_data[0].profile_picture ? user_data[0].profile_picture : defaultPhoto} />
               { user_data[0].username }
              </Header>
          </Menu.Menu>
          <Menu.Menu position='right'>
            <Menu.Item
             name='home'
             active={activeItem === 'home'}
             onClick={this.handleItemClick}
             />
           <Menu.Item
             name='user-statisics'
             active={activeItem === 'user-statisics'}
             onClick={this.handleItemClick}>
               <Scroll.Link
                style={{ color: 'black' }}
                to="feed__more-jobs"
                spy={true}
                smooth={true}
                duration={650}>
                   User Statistics
               </Scroll.Link>
            </Menu.Item>
            <Menu.Item
              name='messages'
              link={true}
              as={Link}
              to="/Messaging_Inbox"
              active={activeItem === 'messages'}
              onClick={this.handleItemClick}
             />
             <Menu.Item>
             { newMessage === 0 ?
              <div id="heading-menu__no-new-messages" /> :
               <div id="heading-menu__new-messages">
                 { newMessage }
                </div>
             }
             </Menu.Item>
            <Menu.Item
              name='logout'
              active={activeItem === 'logout'}
              onClick={this.handleLogOutButton}
             />
          </Menu.Menu>
        </Menu>

      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    userData: state.isAuthenticated
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ logOutUser: actions['logOutUser'] }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Heading);
