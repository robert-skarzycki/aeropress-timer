import React from "react";
import NextButton from "./NextButton";

export default class Grind extends React.Component {
  public render(): JSX.Element {
    return (
      <div>
        <h1>Krok 1 - mielenie kawy</h1>
        <div />
        <NextButton caption="Kawa zmielona!" path="/preinfuse" />
      </div>
    );
  }
}
