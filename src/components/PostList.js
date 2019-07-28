import React from "react";
import { connect } from "react-redux";
import { fetchPostsAndUsers } from "./../actions";
import { Link } from "react-router-dom";

import UserList from "./UserList";
import PostDetails from "./PostDetails";

class PostList extends React.Component {
  componentDidMount() {
    this.props.fetchPostsAndUsers();
  }

  renderList = () => {
    return this.props.posts.map(post => {
      return (
        <div className="item" key={post.id}>
          <div className="content">
            <Link className="header" to="/postDetails">
              ID: {post.id}
              <PostDetails id={post.id} />
            </Link>
            <div className="description">
              <h2>Title: {post.title}</h2>
            </div>
            <UserList userId={post.userId} />
          </div>
        </div>
      );
    });
  };

  render() {
    return <div className="ui relaxed divided list">{this.renderList()}</div>;
  }
}

const mapStateToProps = state => {
  //console.log(state, "state");
  return { posts: state.posts };
};
export default connect(
  mapStateToProps,
  { fetchPostsAndUsers }
)(PostList);
