import React from "react";
import NextButton from "./NextButton";

export default class Welcome extends React.Component {
  public render(): JSX.Element {
    return (
      <div>
        <h1>Aeropress timer</h1>
        <NextButton caption="Zaczynamy!" path="/grind" />
      </div>
    );
  }
}
