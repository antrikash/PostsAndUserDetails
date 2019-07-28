import React from "react";
import { connect } from "react-redux";
import { fetchComments } from "./../actions";
class CommentList extends React.Component {
  render() {
    const { comment } = this.props;
    if (!comment) {
      return null;
    }
    return <div className="header">Posted By: {comment.body}</div>;
  }
}

const mapStateToProps = (state, ownProps) => {
  console.log("commentlist", state);
  return {
    comment: state.comments.find(comment => comment.postId === ownProps.id)
  };
};
export default connect(
  mapStateToProps,
  { fetchComments }
)(CommentList);
