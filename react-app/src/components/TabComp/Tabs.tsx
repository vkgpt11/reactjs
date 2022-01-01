import * as React from "react";
import "./tab.scss";
import TabPanels from "./TabPanels";
import TabList from "./TabList";

interface IState {
  activeIndex: number;
}

// interface IProps {

// }

export default class Tabs extends React.Component<null, IState> {

  constructor() {
    super(null);
    this.state = {
      activeIndex: 0,
    };
  }

  render(): JSX.Element {
    // tslint:disable-next-line: typedef
    const children = React.Children.map(this.props.children, (child) => {
      if (child && child.type === TabPanels) {
        return React.cloneElement(child as React.ReactElement<any>, {
          activeIndex: this.state.activeIndex,
        });
      } else if (child && child.type === TabList) {
        return React.cloneElement(child as React.ReactElement<any>, {
          activeIndex: this.state.activeIndex,
          onActivateTab: (index: number) => {
            this.setState({ activeIndex: index });
          },
        });
      } else {
        return child;
      }
    });
    return (
      <div>{children}</div>
    );
  }
}
