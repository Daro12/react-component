import React from "react";
import reactDOM from "react-dom";
import CommentDetail from "./components/CommentDetail";

const App = () => {
  return (
    <div className="ui container comments">
      <CommentDetail author="Daro" date="Today at 4:45PM" content="Hello, I am Daro"/>
      <CommentDetail author="Vouchly" date="Today at 2:00AM" content="Hello, I am Vouchly" />
      <CommentDetail author="Mey" date="Yesterday at 5:00PM" content="Hello Iam Mey" />
    </div>
  );
};

reactDOM.render(<App />, document.querySelector("#root"));
