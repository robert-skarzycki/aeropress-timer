import React from "react";
import NextButton from "./NextButton";

export default class WashFilter extends React.Component {
  public render(): JSX.Element {
    return (
      <div>
        <h1>Krok 5 - płukanie filtra</h1>
        <div>
          Do sitka włóż papierowy filtr (albo dwa, jeśli wolisz
          poeksperymentować ze smakami) i przelej go ciepłą wodą - żeby
          zneutralizować smak papierowego filtra.
        </div>
        <NextButton caption="Zrobione" path="/press" />
      </div>
    );
  }
}
