import React from "react";
import NextButton from "./NextButton";

export default class Preinfuse extends React.Component {
  public render(): JSX.Element {
    return (
      <div>
        <h1>Krok 2 - preinfuzja</h1>
        <div>Wlej 50 ml wody i poczekaj 30 sekund.</div>
        <NextButton caption="Dalej" path="/fill" />
      </div>
    );
  }
}
