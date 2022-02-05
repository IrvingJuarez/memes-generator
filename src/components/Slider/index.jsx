import React from "react";
import Draggable from 'react-draggable';
// css
import "./slider.css";
import { getGrid } from './utils';

function Slider({ appState, setAppState }){
  const [x, setX] = React.useState(0)
  const [gridValue, setGridValue] = React.useState(0)
  const setGrids = () => {
    const grids = getGrid()
    setAppState(prevState => ({
      ...prevState,
      gridValues: grids
    }))
    setGridValue(grids[0])
  } 
    
  const onDrag = (data) => {
    let newTextWidthValue;
    if(data.x >= x && appState.textWidth >= 100){
      newTextWidthValue = 0
    }else if(data.x <= x && appState.textWidth <= 0){
      newTextWidthValue = 0
    }else{
      newTextWidthValue = Math.round((x - data.x)/-gridValue)
    }
    
    setX(data.x)
    setAppState(prevState => ({
      ...prevState,
      textWidth: prevState.textWidth + newTextWidthValue
    }))
  }

  React.useEffect(() => {
    setGrids()
  }, [appState.img])

  return(
    <article className="slider">
      <div className="slider__title">
        <h2>Text width: </h2>
        <span>{appState.textWidth}%</span>
      </div>

      <section className="slider__slider">
        <div className="slider__bar--main" style={{width: `${appState.textWidth}%`}}></div>
        <Draggable 
          axis='x' 
          bounds="parent"
          onDrag={(evt, data) => onDrag(data)}
          grid={appState.gridValues} >
          <span className="slider__handler"></span>
        </Draggable>
      </section>
    </article>
  )
}

export { Slider }