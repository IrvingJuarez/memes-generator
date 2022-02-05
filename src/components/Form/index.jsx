// React
import React from "react";
import { initialState } from "../../utils";
import "./form.css";
import { handleDownload } from "./utils";

function Form({ appState, setAppState }){
  const [flag, setFlag] = React.useState(false);
  const [isFulfilled, setIsFulfilled] = React.useState(false)
  const { topText, bottomText, img } = appState;

  const onDownload = () => handleDownload(setIsFulfilled);
  const handleText = (e) => {
    const {value, name} = e.target
    setAppState(prevState => ({
      ...prevState,
      [name]: value
    }))
    handleFlag(value, name)
  }
  const handleFlag = (value, name) => {
    let newFlagValue
    if(name === "topText"){
      newFlagValue = (value || bottomText) ? true : false
    }else{
      newFlagValue = (value || topText) ? true : false
    }
    setFlag(newFlagValue)
  }
  const onRemove = () => {
    setIsFulfilled(false)
    setFlag(false)
    setAppState(initialState())
  }

  return(
    <section className="form-container">
      <input
        value={topText}
        onChange={handleText}
        className="form__input"
        type="text"
        id="top-text"
        placeholder="Top text"
        name="topText"
      />
      <input
        value={bottomText}
        onChange={handleText}
        className="form__input"
        type="text"
        id="bottom-text"
        placeholder="Bottom text"
        name="bottomText"
      />
      <button
        onClick={isFulfilled ? onRemove : onDownload}
        disabled={img && flag ? "" : true}
        className={`form__button ${img && flag ? "abled" : null}`}
        type="button"
      >
        {isFulfilled ? "Remove media" : "Download image"}
      </button>
    </section>
  )
}

export { Form };
