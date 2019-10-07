import React, { Component } from "react";
import { connect } from "react-redux";
import requestPosts from "../actions";
class PostList extends Component {
  componentDidMount() {
    this.props.requestPosts();
  }
  render() {
    console.log(this.props.posts);
    return <div>PostList</div>;
  }
}

const mapStateToProps = state => ({
  posts: state.posts
});

export default connect(
  mapStateToProps,
  { requestPosts: requestPosts }
)(PostList);
