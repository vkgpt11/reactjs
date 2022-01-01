import * as React from "react";
import "./tab.scss";

export default class TabPanels extends React.Component {
  render(): JSX.Element {
    const activeIndex: number = this.props.activeIndex;
    // tslint:disable-next-line: typedef
    const selChild = React.Children.map(this.props.children, (child, index) => {
      return index === activeIndex ? child : null;
    });
    return (
      <div>
        {selChild}
      </div>
    );
  }
}
