import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchPostsAndUsers } from "../actions";

import UserHeader from "./UserHeader";
class PostList extends Component {
  componentDidMount() {
    this.props.fetchPostsAndUsers();
  }

  renderList = () => {
    if (this.props.posts.data)
      return this.props.posts.data.map(item => (
        <div key={item.id} className="item">
          <i className="user icon"></i>
          <div className="content">
            <div className="header">{item.title}</div>
            <div className="description">{item.body}</div>
            <UserHeader userId={item.userId} />
          </div>
        </div>
      ));
    else return <i className="spinner icon"></i>;
  };
  render() {
    this.renderList();
    return <div className="ui relaxed divided list">{this.renderList()}</div>;
  }
}

const mapStateToProps = state => ({
  posts: state.posts
});

export default connect(
  mapStateToProps,
  { fetchPostsAndUsers }
)(PostList);
