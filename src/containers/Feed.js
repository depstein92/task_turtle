import React, { Component } from 'react';
import actions from '../actions/index';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Item, Button, Icon, Label, Modal } from 'semantic-ui-react';
import PostsForm from './PostsForm';
import { DotLoader } from 'react-spinners';

class Feed extends React.Component{

  state = {
    isClient: false,
    jobsAdded: false
  }

  componentDidMount(){
   const {getAllPosts} = this.props;
   getAllPosts();
  }

  togglePostsFormTrue = () => this.setState({ isClient: true });
  togglePostsFormFalse = () => this.setState({ isClient: false });
  toggleFeedTrue = () => this.setState({ jobsAdded: true });
  toggleFeedFalse = () => this.setState({ jobsAdded: false });

  renderPosts = () => {
    const {posts, message} = this.props.posts.payload.data

    if(message === "Post added"){
      this.toggleFeedFalse();
    }

    return posts.map((post, index) => {
      return(
     <Item key={index}>
        <Item.Image src='../src/style/images/wireframe.png' />
        <Item.Content>
          <Item.Header as='a'>{post.title}</Item.Header>
          <Item.Meta>
            <span>{post.client}</span>
          </Item.Meta>
          <Item.Description>
            {post.description}
            {post.location}
            {post.date}
          </Item.Description>
           <Item.Extra>
            <Button primary floated='right'>
              Request Job
              <Icon name='right chevron' />
            </Button>
            <Label>Quick Job</Label>
            <Label>Prime Hours</Label>
        </Item.Extra>
        </Item.Content>
     </Item>
      )
    })
  }

  render(){
    return(
       <div className="feed">
         <div className="feed__draggable-handle">
          <Icon className={"angle up"} size={"huge"} />
         </div>
          <h1> Jobs </h1>
          {
            this.state.isClient ?
            <div
             className="feed__form-toggle"
             onClick={this.togglePostsFormFalse}
             >
              Need a Job done? Click here.
            </div>
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
       </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ getAllPosts: actions['getAllPostsSuccess']}, dispatch);
}

const mapStateToProps = state => {
  return {
    posts: state.jobPosts
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Feed);
