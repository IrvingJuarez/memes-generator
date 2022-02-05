// css
import "./slider.css";

function Slider(){
  return(
    <article className="slider">
      <div className="slider__title">
        <h2>Text width: </h2>
        <span>70%</span>
      </div>

      <section className="slider__slider">
        <div className="slider__bar--main"></div>
        <span className="slider__handler"></span>
      </section>
    </article>
  )
}

export { Slider }