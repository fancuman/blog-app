import React, { Component } from "react";
import { connect } from "react-redux";
import requestPosts from "../actions";
class PostList extends Component {
  componentDidMount() {
    this.props.requestPosts();
  }
  render() {
    return <div>PostList</div>;
  }
}

export default connect(
  null,
  { requestPosts: requestPosts }
)(PostList);
