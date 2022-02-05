// React
import React from "react";
import { faCamera } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// css
import "./memeContainer.css";
// utils
import { getRatio } from "./utils";

function MemeContainer({ appState, setAppState }){
  const [memeContainerState, setMemeContainerState] = React.useState({
    loading: false,
    ratio: undefined
  })
  const handleAddingImg = (e) => {
    const {files} = e.target
    if (files.length > 0) {
      setMemeContainerState(prevState => ({
        ...prevState,
        loading: true
      }))
      setAppState(prevState => ({
        ...prevState,
        img: files[0]
      }))
    }
  };

  React.useEffect(() => {
    if (memeContainerState.loading) {
      getRatio(setMemeContainerState);
    }
  }, [memeContainerState.loading]);

  return (
    <section className={`meme-container ${appState.img && "hidden"}`}>
      {appState.img ? (
        <React.Fragment>
          <div className="meme__final">
            {memeContainerState.loading && <div className="loader"></div>}
            <img
              className={`meme__uploaded-img 
                ${memeContainerState.loading && "nonvisible"} 
                ${memeContainerState.ratio && `${memeContainerState.ratio}`}`}
              src={URL.createObjectURL(appState.img)}
              alt={appState.img.name}
            />
            <div className={`meme__overlapping ${memeContainerState.ratio && `${memeContainerState.ratio}`}`}>
              <p style={{width: `${appState.textWidth}%`}} className="meme__text meme__top-text">{appState.topText}</p>
              <p style={{width: `${appState.textWidth}%`}} className="meme__text meme__bottom-text">{appState.bottomText}</p>
            </div>
          </div>
        </React.Fragment>
      ) : (
        <form className="meme__form" encType="multipart/form-data">
          <label className="meme__label" htmlFor="meme__input">
            <FontAwesomeIcon icon={faCamera} size="3x" />
            <h3>Choose an image</h3>
          </label>
          <input
            onChange={handleAddingImg}
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
