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

  return (
    <div className="App">
      <Header />
      <Form appState={appState} setAppState={setAppState}/>
      <MemeContainer appState={appState} setAppState={setAppState}/>
      {appState.img && (
        <React.Fragment>
          <Slider appState={appState} setAppState={setAppState} />
        </React.Fragment>
      )}
    </div>
  );
}
