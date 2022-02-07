import React from "react"
// components
import { Form } from "./components/Form";
import { Header } from "./components/Header";
import { MemeContainer } from "./components/MemeContainer";
import { Slider } from "./components/Slider";
// css
import "./styles.css";
import { initialState } from "./utils";

export default function App() {
  const [appState, setAppState] = React.useState(initialState())
  const {textWidth, textSize} = appState;

  return (
    <div className="App">
      <Header />
      <Form appState={appState} setAppState={setAppState}/>
      <MemeContainer appState={appState} setAppState={setAppState}/>
      {appState.img && (
        <React.Fragment>
          <Slider title="Text width" name="textWidth" measuredIn="%" appState={appState} setAppState={setAppState} />
          <Slider title="Text size" name="textSize" measuredIn="px" appState={appState} setAppState={setAppState} />
        </React.Fragment>
      )}
    </div>
  );
}
