import React from "react";
import NextButton from "./NextButton";

export default class Wait extends React.Component<{}, { seconds: number }> {
  private timer?: NodeJS.Timeout;

  constructor(props: any) {
    super(props);

    this.state = { seconds: 30 };
  }

  public componentDidMount() {
    this.timer = setInterval(this.tick, 1000);
  }

  public render(): JSX.Element {
    return (
      <div>
        <h1>Krok 4 - zaczekaj</h1>
        {this.state.seconds > 0 ? (
          <div>Zaczekaj {this.state.seconds} sekund...</div>
        ) : (
          <div>Idziemy do następnego kroku!</div>
        )}
        <NextButton caption="Dalej" path="/wash-filter" />
      </div>
    );
  }

  private tick = () => {
    if (this.state.seconds === 0 && this.timer) {
      clearInterval(this.timer);
      return;
    }
    this.setState(s => {
      const seconds = s.seconds - 1;
      return { seconds };
    });
  };
}
