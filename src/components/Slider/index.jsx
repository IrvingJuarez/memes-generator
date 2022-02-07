import React from "react";
import Draggable from 'react-draggable';
// css
import "./slider.css";
import { getGrid } from './utils';

function Slider({ title, name, measuredIn, appState, setAppState }){
  const [initialPercentage, setInitialPercentage] = React.useState(0)
  const {gridValues} = appState;
  const [x, setX] = React.useState(0)
  const [gridValue, setGridValue] = React.useState(0)
    
  const onDrag = (data) => {
    let newInitialValue;
    if(data.x >= x && appState[name] >= 100){
      newInitialValue = 0
    }else if(data.x <= x && appState[name] <= 0){
      newInitialValue = 0
    }else{
      newInitialValue = Math.round((x - data.x)/-gridValue)
    }
    
    setX(data.x)
    setAppState(prevState => {
      return {
        ...prevState,
        [name]: prevState[name] + newInitialValue
      }
    })
  }

  React.useEffect(() => {
    const grids = getGrid()
    setAppState(prevState => ({
      ...prevState,
      gridValues: grids
    }))
    setGridValue(grids[0])
    setInitialPercentage(appState[name])
  }, [setAppState])

  return(
    <article className="slider">
      <div className="slider__title">
        <h2>{title}: </h2>
        <span>{`${appState[name]}${measuredIn}`}</span>
      </div>

      <section className="slider__slider">
        <div className="slider__bar--main" style={{width: `${appState[name]}%`}}></div>
        <Draggable 
          axis='x' 
          bounds="parent"
          onDrag={(evt, data) => onDrag(data)}
          grid={gridValues} >
          <span style={{left: `calc(${initialPercentage}% - 8.5px)`}} className="slider__handler"></span>
        </Draggable>
      </section>
    </article>
  )
}

export { Slider }