import * as React from "react";
import "./App.scss";
import Layout from "./Layout";

export default class App extends React.Component {
  render(): JSX.Element {
    return (
      <div className="border">
       <Layout/>
      </div>
    );
  }
}
