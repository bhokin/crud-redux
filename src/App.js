import React, { Component } from "react";
import AllPost from "./AllPost";
import PostForm from "./PostForm";

class App extends Component {
  render() {
    return (
      <div className='App'>
        <AllPost />
        <PostForm />
      </div>
    );
  }
}

export default App;
