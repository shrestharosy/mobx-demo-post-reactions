import React, { Component } from "react";
import Card from "./Card";
import Form from './Form';
import Comments from "./Comments";

export default function Dashboard() {
  return (
    <div className="container-md" align="center">
      <Card />
      <Form />
      <Comments />
    </div>
  )
}