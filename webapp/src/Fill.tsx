import React from "react";
import NextButton from "./NextButton";

export default class Fill extends React.Component {
  public render(): JSX.Element {
    return (
      <div>
        <h1>Krok 3 - uzupełnij</h1>
        <div>Dolej 150 ml wody</div>
        <NextButton caption="Dalej" path="/wait" />
      </div>
    );
  }
}
