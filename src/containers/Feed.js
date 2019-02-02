import React, { Component } from 'react';
import actions from '../actions/index';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Item, Button, Icon, Label, Modal, Popup, List } from 'semantic-ui-react';
import PostsForm from './PostsForm';
import { DotLoader } from 'react-spinners';
import UserStatistics from './UserStatistics';

class Feed extends React.Component{

  state = {
    jobsAdded: false,
    isModalOpen: false,
    newMessage: 0
  }

  componentDidMount(){
   const { getAllPosts } = this.props;
   getAllPosts();
  }

  toggleFeedTrue = () => this.setState({ jobsAdded: true });
  toggleFeedFalse = () => this.setState({ jobsAdded: false });

  addNewMessage = () => {
    const { newMessage } = this.state;
    this.setState({
      newMessage: newMessage++
    });
  }

  renderUserModal = () => {
    return(
    <Modal trigger={
      <div className="feed__form-toggle">
      Are you posting a Job? Click here.
      </div>
      }
      centered={false}
      id="feed-modal"
     >
      <Modal.Header>Note to User</Modal.Header>
      <Modal.Content>
        <Modal.Description>
          <p>
          If you are not registered as a
          client you cannot post jobs
          </p>
        </Modal.Description>
      </Modal.Content>
   </Modal>
    )
  }

  renderPosts = () => {
    const { posts, message } = this.props.posts.payload.data
    const { renderNewMessage } = this.props;
    const { newMessage } = this.state;

    if(message === "Post added"){
      this.toggleFeedFalse();
    }

    return posts.map((post, index) => {
      return(
     <Item key={index}>
        <Item.Image src={ post.profile_picture ? '../src/style/images/matthew.png' : '../src/style/images/matthew.png'} />
        <Item.Content>
          <Item.Header as='a'>{ post.title }</Item.Header>
          <Item.Meta>
            <span>{post.client}</span>
          </Item.Meta>
          <Item.Description>
            { post.description }
            { post.location }
            { post.date }
          </Item.Description>
           <Item.Extra>
            <Button
             onClick={
               () => {
                 this.requestJobForPost(post.client, post.date, post.time, post.location, post.title)
                 this.addNewMessage()
                 renderNewMessage(newMessage)
               }
             }
             primary floated='right' basic color='violet' content='Violet'>
              Request Job
              <Icon name='right chevron' />
            </Button>
            <List divided selection>
               <Label
                as='a'
                color='teal'
                tag>
                Quick Job
               </Label>
               <Label
                as='a'
                color='teal'
                tag>
                Prime Hours
                </Label>
            </List>
        </Item.Extra>
        </Item.Content>
     </Item>
      )
    })
  }

  requestJobForPost = (client, date, time, location, title) => {
    const { requestJob } = this.props;
    const { user_data } = this.props.userData.isLoggedIn;

    requestJob(
      user_data[0].username,
      date,
      time,
      client,
      title
    );
  }



  render(){
    const { isClient } = this.props.userData.isLoggedIn.user_data[0]
    return(
       <div className="feed">
         <div className="feed__draggable-handle">
         <Popup
          trigger={
            <Icon
             className={"angle up"}
             size={"huge"}
             />
           }
          content='Pull up to see jobs and statisics'
          />
         </div>
          <h1> Jobs </h1>
          {
          !isClient ?
            this.renderUserModal()
              :
            <div className="feed__exit-container">
             <div className="feed__exit-container exit-icon">
              <Icon
               onClick={this.togglePostsFormTrue}
               name="close"
               />
              </div>
              <PostsForm toggleForm={this.toggleFeedTrue} />
            </div>
          }
          <Item.Group className="feed__job-posts" divided>
            {
              this.state.jobsAdded ?
               <DotLoader
                  sizeUnit={"px"}
                  size={150}
                  color={'#123abc'}
                  loading={this.state.jobsAdded}
                /> :
              this.renderPosts()
            }
          </Item.Group>
        <div className="feed__more-jobs">
          <a href="/#/UserProfile" className="see-more-jobs-link">
            Click here to see more jobs...
          </a>
        </div>
        <UserStatistics />
       </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({
    getAllPosts: actions['getAllPostsSuccess'],
    requestJob: actions['sendUsersJobRequestSuccess']
  }, dispatch);
}

const mapStateToProps = state => {
  return {
    posts: state.jobPosts,
    userData: state.isAuthenticated
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Feed);
