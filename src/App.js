import React from "react"
// components
import { Form } from "./components/Form";
import { Header } from "./components/Header";
import { MemeContainer } from "./components/MemeContainer";
// css
import "./styles.css";

export default function App() {
  const [appState, setAppState] = React.useState({
    img: undefined,
    topText: "",
    bottomText: ""
  })

  return (
    <div className="App">
      <Header />
      <Form appState={appState} setAppState={setAppState}/>
      <MemeContainer appState={appState} setAppState={setAppState}/>
    </div>
  );
}
