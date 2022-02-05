// React
import React from "react";
import "./form.css";
import { handleDownload } from "./utils";

function Form({ appState, setAppState }){
  const [flag, setFlag] = React.useState(false);
  const [isFulfilled, setIsFulfilled] = React.useState(false)
  const handleText = (e) => {
    const {value, name} = e.target
    setAppState(prevState => ({
      ...prevState,
      [name]: value
    }))
    const newFlagValue = (appState.topText || appState.bottomText) ? true : false
    setFlag(newFlagValue)
  }
  const onDownload = () => {
    handleDownload(setIsFulfilled)
  }
  const onRemove = () => {
    setIsFulfilled(false)
    setFlag(false)
    setAppState({
      img: undefined,
      topText: "",
      bottomText: ""
    })
  }

  return(
    <section className="form-container">
      <input
        value={appState.topText}
        onChange={handleText}
        className="form__input"
        type="text"
        id="top-text"
        placeholder="Top text"
        name="topText"
      />
      <input
        value={appState.bottomText}
        onChange={handleText}
        className="form__input"
        type="text"
        id="bottom-text"
        placeholder="Bottom text"
        name="bottomText"
      />
      <button
        onClick={isFulfilled ? onRemove : onDownload}
        disabled={appState.img && flag ? "" : true}
        className={`form__button ${appState.img && flag ? "abled" : null}`}
        type="button"
      >
        {isFulfilled ? "Remove media" : "Download image"}
      </button>
    </section>
  )
}

export { Form };
