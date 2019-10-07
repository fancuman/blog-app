import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchUser } from "../actions";

class UserHeader extends Component {
  render() {
    return <div className="header">{this.props.userName}</div>;
  }
}

const mapStateToProps = (state, ownProps) => {
  const user = state.users.find(user => user.id === ownProps.userId);
  return {
    userName: user ? user.name : null
  };
};

export default connect(
  mapStateToProps,
  { fetchUser }
)(UserHeader);
