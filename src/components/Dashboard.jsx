import React, { Component } from "react";
import Image from "./Image";
import Form from './Form';

export class Dashboard extends Component {
  render() {
    return (
      <div className="container-md" align="center">
        <Image />
        <Form />
      </div>
    )
  }
}

export default Dashboard