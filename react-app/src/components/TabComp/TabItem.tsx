import * as React from "react";
import "./tab.scss";

interface IProps {
  name: string;
}

export default class TabItem extends React.Component<IProps> {
  constructor(props: IProps) {
    super(props);
  }
  render(): JSX.Element {
    return (
      <div className={`tab-item ${this.props.isSelected ? "active" : ""}`} onClick={() => this.props.onActivate()}>
        {this.props.name}
      </div>
    );
  }
}
