import React from "react";
import { connect } from "react-redux";

class UserList extends React.Component {
  render() {
    const { user } = this.props;
    if (!user) {
      return null;
    }
    return <div className="header">Posted By: {user.name}</div>;
  }
}

const mapStateToProps = (state, ownProps) => {
  return { user: state.users.find(user => user.id === ownProps.userId) };
};
export default connect(mapStateToProps)(UserList);
