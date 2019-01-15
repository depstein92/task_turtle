import React, {Component} from 'react';
import actions from '../actions/index';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Item, Button, Icon, Label, Modal } from 'semantic-ui-react';
import PostsForm from './PostsForm';
import '../style/Feed.scss';

class Feed extends React.Component{

  state = { isClient: false }

  componentDidMount(){
   const {getAllPosts} = this.props;
   getAllPosts();
  }

  togglePostsFormTrue = () => this.setState({ isClient: true });
  togglePostsFormFalse = () => this.setState({ isClient: false });

  renderPosts = () => {
    const {posts} = this.props.posts.payload.data

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
       <div className="feed-container">
          <h1> Jobs </h1>
          {
            this.state.isClient ?
            <div
             onClick={this.togglePostsFormFalse}
             className="form-toggle">
              Need a Job done? Click here.
            </div>
              :
            <div className="form-exit-container">
             <div className="form-exit-icon">
              <Icon
               onClick={this.togglePostsFormTrue}
               name="close"
               />
              </div>
              <PostsForm />
            </div>
          }
          <Item.Group divided>
            { this.renderPosts() }
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
