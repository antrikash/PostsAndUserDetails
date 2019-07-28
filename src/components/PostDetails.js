import React from "react";
import { connect } from "react-redux";
import { fetchPostsAndUsers } from "./../actions";

import UserList from "./UserList";
import CommentList from "./CommentList";

class PostList extends React.Component {
  componentDidMount() {
    this.props.fetchPostsAndUsers();
  }

  renderList = () => {
    return this.props.posts.map(post => {
      return (
        <div className="item" key={post.id}>
          <div className="content">
            <div className="description">
              <h2>Title: {post.title}</h2>
              <p>Body: {post.body}</p>
            </div>
            <UserList userId={post.userId} />
          </div>
          <>
            <CommentList commentId={post.id} />
          </>
        </div>
      );
    });
  };

  render() {
    return <div className="ui relaxed divided list">{this.renderList()}</div>;
  }
}

const mapStateToProps = state => {
  return { posts: state.posts };
};
export default connect(
  mapStateToProps,
  { fetchPostsAndUsers }
)(PostList);
