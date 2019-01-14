import React, {Component} from 'react';
import actions from '../actions/index';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Item, Button, Icon, Label } from 'semantic-ui-react';
import '../style/Feed.scss';

class Feed extends React.Component{
  constructor(props){
    super(props);

    this.state = { data: 0 }
  }

  componentDidMount(){
   const {getAllPosts} = this.props;
   getAllPosts();
  }

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
