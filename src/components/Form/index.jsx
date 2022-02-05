// React
import React from "react";
import "./form.css";
import { onDownload } from "./utils";

function Form({ appState, setAppState }){
  const [flag, setFlag] = React.useState(false);
  const handleText = (e) => {
    const {value, name} = e.target
    setAppState(prevState => ({
      ...prevState,
      [name]: value
    }))
    const newFlagValue = (appState.topText || appState.bottomText) ? true : false
    setFlag(newFlagValue)
  }

  return(
    <section className="form-container">
      <input
        onChange={handleText}
        className="form__input"
        type="text"
        id="top-text"
        placeholder="Top text"
        name="topText"
      />
      <input
        onChange={handleText}
        className="form__input"
        type="text"
        id="bottom-text"
        placeholder="Bottom text"
        name="bottomText"
      />
      <button
        onClick={onDownload}
        disabled={appState.img && flag ? "" : true}
        className={`form__button ${appState.img && flag ? "abled" : null}`}
        type="button"
      >
        Download image
      </button>
    </section>
  )
}

export { Form };
