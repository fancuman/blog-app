import React, { Component } from "react";
import { connect } from "react-redux";
import requestPosts from "../actions";
class PostList extends Component {
  componentDidMount() {
    this.props.requestPosts();
  }

  renderList = () => {
    if (this.props.posts.data)
      return this.props.posts.data.map(item => (
        <div key={item.id} class="item">
          <i class="user icon"></i>
          <div class="content">
            <a class="header">{item.title}</a>
            <div class="description">{item.body}</div>
          </div>
        </div>
      ));
    else return <i class="spinner icon"></i>;
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
  { requestPosts: requestPosts }
)(PostList);
