import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts, API_SPACE_ID, API_TOKEN } from '../actions/index';

class PostsIndex extends Component {
  componentWillMount() {
    this.props.fetchPosts();
  }

  renderPosts() {
    return this.props.posts.map((post, index) => {
      return (
        <div key={post.sys.id}>
          <h3>{post.fields.title}</h3>
          <p>{post.fields.description}</p>
          
        </div>
      );
    });
  }
  render() {
    return (
      <div>
        <h2>Blog Posts</h2>
        {this.renderPosts()}
      </div>
    );
  }
}
function mapStateToProps(state) {
  return { posts: state.posts.all };
}
export default connect(mapStateToProps, { fetchPosts })(PostsIndex);
