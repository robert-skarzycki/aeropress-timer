import React from "react";
import { withRouter, RouteComponentProps } from "react-router";

class NextButton extends React.Component<
  { caption: string; path: string } & RouteComponentProps
> {
  public render(): JSX.Element {
    return <button onClick={this.next}>{this.props.caption}</button>;
  }

  private next = () => {
    this.props.history.push(this.props.path);
  };
}

export default withRouter(NextButton);
