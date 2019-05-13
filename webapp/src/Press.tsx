import React from "react";
import NextButton from "./NextButton";

export default class Press extends React.Component {
  public render(): JSX.Element {
    return (
      <div>
        <h1>Krok 6 - wyciskanie</h1>
        <div>
          Zamontuj sitko na aeropressie, obróć całość do góry nogami, postaw
          aeropress na filiżance i powoli wyciskaj przez X sekund...
        </div>
        <NextButton caption="Zrobione, dzięki!" path="/" />
        <NextButton caption="Robimy następną kawę" path="/grind" />
      </div>
    );
  }
}
