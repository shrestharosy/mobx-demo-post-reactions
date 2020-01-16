import React, { Component } from "react";
import Image from "./Image";
import Form from './Form';
import Comments from "./Comments";

export class Dashboard extends Component {
  render() {
    return (
      <div className="container-md" align="center">
        <Image />
        <Form />
        <Comments />
      </div>
    )
  }
}

export default Dashboard