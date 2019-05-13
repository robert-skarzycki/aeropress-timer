import React from "react";
import NextButton from "./NextButton";

export default class Wait extends React.Component {
  public render(): JSX.Element {
    return (
      <div>
        <h1>Krok 4 - zaczekaj</h1>
        <div>Zaczekaj X sekund...</div>
        <NextButton caption="Dalej" path="/press" />
      </div>
    );
  }
}
