// React
import React from "react";
import "./form.css";
import { handleBottomText, handleTopText, onDownload } from "./utils";

function Form(props) {
  const { topText, setTopText, bottomText, setBottomText, img } = props;
  const [flag, setFlag] = React.useState(false);

  return (
    <section className="form-container">
      <input
        onChange={(e) =>
          handleTopText(e, topText, bottomText, setFlag, setTopText)
        }
        className="form__input"
        type="text"
        id="top-text"
        placeholder="Top text"
      />
      <input
        onChange={(e) =>
          handleBottomText(e, topText, bottomText, setFlag, setBottomText)
        }
        className="form__input"
        type="text"
        id="bottom-text"
        placeholder="Bottom text"
      />
      <button
        onClick={onDownload}
        disabled={img && flag ? "" : true}
        className={`form__button ${img && flag ? "abled" : null}`}
        type="button"
      >
        Download image
      </button>
    </section>
  );
}

export { Form };
