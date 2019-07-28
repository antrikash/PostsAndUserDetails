import React from "react";
import PostList from "./PostList";
import PostDetails from "./PostDetails";
import { BrowserRouter as Router, Route } from "react-router-dom";

const App = () => {
  return (
    <div>
      <Router>
        <div>
          <Route path="/" exact component={PostList} />
          <Route
            path="/postDetails"
            exact
            render={() => {
              return <PostDetails />;
            }}
          />
        </div>
      </Router>
    </div>
  );
};

export default App;
