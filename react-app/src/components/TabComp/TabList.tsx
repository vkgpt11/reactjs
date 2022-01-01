import * as React from "react";
import "./tab.scss";

export default class TabList extends React.Component {
  render(): JSX.Element {
    const activeIndex: number = this.props.activeIndex;

    // tslint:disable-next-line: typedef
    const children = React.Children.map(this.props.children, (child, index) => {
      return React.cloneElement(child as React.ReactElement<any>, {
        isSelected: index === activeIndex,
        onActivate: () => {
          this.props.onActivateTab(index);
        },
      });
    });
    return (
      <div className="tab">
        {children}
      </div>
    );
  }
}
