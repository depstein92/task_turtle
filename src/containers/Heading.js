import React from 'react';
import { Link } from 'react-router-dom';
import { StyleSheet, css } from "aphrodite";
import { Menu, Segment, Icon } from 'semantic-ui-react';


class Heading extends React.Component{
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <div className={css(styles.menu_container)} data-test='heading'>
      <Segment>
      </Segment>
        <Menu pointing secondary>
         <Menu.Item>
          <Icon className='truck' />
          </Menu.Item>
          <Menu.Item name='home'
           active={activeItem === 'home'}
           onClick={this.handleItemClick}>
           <Link to="/" className={css(styles.link)}>Home</Link>
           </Menu.Item>
          <Menu.Item
            name='memes'
            active={activeItem === 'memes'}
            onClick={this.handleItemClick}>
            <Link to="/memes" className={css(styles.link)}>
            Memes
            </Link>
          </Menu.Item>
        </Menu>
      </div>
    )
  }
}

const styles = StyleSheet.create({
  menu_container: {
    position: "relative",
    marginBottom: "10%"
  },
  link: {
    color: "black"
  }

});

export default Heading;
