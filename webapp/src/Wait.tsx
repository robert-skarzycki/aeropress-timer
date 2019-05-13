import React from "react";
import NextButton from "./NextButton";

export default class Wait extends React.Component<{}, { seconds: number }> {
  private timer?: NodeJS.Timeout;

  constructor(props: any) {
    super(props);

    this.state = { seconds: 60 };
  }

  public componentDidMount() {
    this.timer = setInterval(this.tick, 1000);
  }

  public render(): JSX.Element {
    return (
      <div>
        <h1>Krok 4 - zaczekaj</h1>
        {this.state.seconds > 0 ? (
          <React.Fragment>
            <div>Zaczekaj {this.state.seconds} sekund...</div>
            <div>
              W międzyczasie do sitka włóż papierowy filtr (albo dwa, jeśli
              wolisz poeksperymentować ze smakami) i przelej go ciepłą wodą -
              żeby zneutralizować smak papierowego filtra.
            </div>
          </React.Fragment>
        ) : (
          <div>Filtr przepłukany? Idziemy do następnego kroku!</div>
        )}
        <NextButton caption="Dalej" path="/press" />
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
