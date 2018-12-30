import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, Header, Image } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import '../style/Heading.scss';

class Heading extends React.Component{

  constructor(props){
    super(props);

    this.state = { activeItem: 'home' };
  }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });
  

  render() {
    const { activeItem } = this.state;
    const { name, picture } = this.props.userData.payload;

    return (
      <div data-test='heading'>
       <Menu pointing secondary className={'heading-menu'}>
          <Menu.Menu position='left' className={"heading-menu-profile-image"}>
              <Header as='h2'>
              <Image circular src={picture.thumbnail} />
              { name.first }
              </Header>
          </Menu.Menu>
          <Menu.Menu position='right'>
            <Menu.Item
              name='logout'
              active={activeItem === 'logout'}
              onClick={this.handleItemClick}
            />
            <Menu.Item
             name='home'
             active={activeItem === 'home'}
             onClick={this.handleItemClick} />
            <Menu.Item
              name='messages'
              active={activeItem === 'messages'}
              onClick={this.handleItemClick}
            />
          </Menu.Menu>
        </Menu>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    userData: state.userData
  };
};

export default connect(mapStateToProps)(Heading);
