import _ from 'lodash';
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchPosts} from '../actions';

class PostsIndex extends Component {
  componentDidMount(){ // react life cycle function autotiaclly call by react when component show up inside the dom, call the function once time when the component first render
    this.props.fetchPosts();
  }

renderPosts(){
  //_.map can map the object list,
  return _.map(this.props.posts, (post)=>{
    return (
      <li className="list-group-item" key={post.id}>
        {post.title}
      </li>
    )
  })
}


  render(){
    return(
      <div>
        <h3>Posts</h3>
        <ul className="list-group">
          {this.renderPosts()}
        </ul>
      </div>
    )
  }
}
function mapStateToProps(state){
  return{
    posts: state.posts
  };
}

export default connect(mapStateToProps,{fetchPosts:fetchPosts})(PostsIndex);
                           // another syntax to connect actioncreator to component insteand of mapDispacthToProps function
