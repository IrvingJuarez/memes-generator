// React
import React from "react";
// css
import { faCamera } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./memeContainer.css";
// utils
import { getRatio, handleAddingImg } from "./utils";

function MemeContainer({ img, setImg, topText, bottomText }) {
  const [loading, setLoading] = React.useState(false);
  const [ratio, setRatio] = React.useState(undefined);
  const onAddingImg = (e) => handleAddingImg(e, setImg, setLoading);

  React.useEffect(() => {
    if (loading) {
      getRatio(setRatio, setLoading);
    }
  }, [loading]);

  return (
    <section className={`meme-container ${img && "hidden"}`}>
      {img ? (
        <React.Fragment>
          <div className="meme__final">
            <img
              className={`meme__uploaded-img 
                ${loading && "nonvisible"} 
                ${ratio && `${ratio}`}`}
              src={URL.createObjectURL(img)}
              alt={img.name}
            />
            <div className={`meme__overlapping ${ratio && `${ratio}`}`}>
              <p className="meme__text meme__top-text">{topText}</p>
              <p className="meme__text meme__bottom-text">{bottomText}</p>
            </div>
          </div>
          {loading && <div className="loader"></div>}
        </React.Fragment>
      ) : (
        <form className="meme__form" encType="multipart/form-data">
          <label className="meme__label" htmlFor="meme__input">
            <FontAwesomeIcon icon={faCamera} size="3x" />
            <h3>Choose an image</h3>
          </label>
          <input
            onChange={onAddingImg}
            className="meme__input nonvisible"
            type="file"
            id="meme__input"
          />
        </form>
      )}
    </section>
  );
}

export { MemeContainer };
