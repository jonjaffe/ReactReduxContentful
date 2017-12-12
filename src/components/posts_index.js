import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts, fetchAssets, API_SPACE_ID, API_TOKEN } from '../actions/index';
import Asset from './asset';
import { Link } from 'react-router';

class PostsIndex extends Component {
  componentWillMount() {
    this.props.fetchPosts();
  }

  renderPosts() {
    return this.props.posts.map((post, index) => {
      return (
        <div key={post.sys.id} className='post_index_item'>
          <h3>{post.fields.title}</h3>
          <p>{post.fields.description}</p>
          <Asset assetId={post.fields.featuredImage.sys.id} />
          <Link to={"entries/" + post.fields.title}>Check it out</Link>
        </div>
      );
    });
  }
  render() {
    return (
      <div className>
        <h2>Blog Posts</h2>
        <div className='post_index_container'>
          {this.renderPosts()}
        </div>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return { posts: state.posts.all, images: state.posts.images };
}
export default connect(mapStateToProps, { fetchPosts })(PostsIndex);
