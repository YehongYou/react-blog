import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchPost, deletePost} from '../actions';
import {Link} from 'react-router-dom';

class PostsShow extends Component {
  componentDidMount(){
    if (!this.props.post) {
    const {id} = this.props.match.params; //match url router :id
    // const id = this.props.match.params.id;
    this.props.fetchPost(id);
    }
  }

  onDeleteClick(){
    const {id} = this.props.match.params;
    this.props.deletePost(id,()=>{
      this.props.history.push('/');
    });
  }

  render(){
    const post = this.props.post;
    // posts[this.props.match.params.id]; // the post we want to show

    if(!post){
      return <div>Loading...</div>
    }
    return(
      <div>
        <Link to='/'>Back To index</Link>
        <button
          className="btn btn-danger pull-xs-right"
          onClick={this.onDeleteClick.bind(this)}
        >
         Delete Post
        </button>
        <h3>{post.title}</h3>
        <h6>{post.categories}</h6>
        <p>{post.content}</p>
      </div>
    )
  }
}
                                // ownProps === this.props
function mapStateToProps(state, ownProps){ // ownProps is state for current component
  return{
    // posts: state.posts
    post: state.posts[ownProps.match.params.id]
  }
}

export default connect(mapStateToProps,{fetchPost, deletePost})(PostsShow);
