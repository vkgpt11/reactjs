import * as React from "react";
import "./tab.scss";

export default class TabPanel extends React.Component {
  render(): JSX.Element {
    return (
      <div>
        {this.props.children}
      </div>
    );
  }
}
