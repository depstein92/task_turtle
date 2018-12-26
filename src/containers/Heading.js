import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, Segment, Icon } from 'semantic-ui-react';
import PropTypes from 'prop-types';

class Heading extends React.Component{

  this.state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

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
          <Menu.Item
           name='home'
           active={activeItem === 'home'}
           data-test="home_button"
           link={true}
           onClick={this.handleItemClick}>
           <Link to="/" className={css(styles.link)}>Home</Link>
           </Menu.Item>
          <Menu.Item
            name='tasks'
            active={activeItem === 'memes'}
            data-test="tasks_button"
            link={true}
            onClick={this.handleItemClick}>
            <Link to="/tasks" className={css(styles.link)}>
            Memes
            </Link>
          </Menu.Item>
        </Menu>
      </div>
    )
  }
}

export default Heading;
