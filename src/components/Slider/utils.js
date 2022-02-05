export const getGrid = () => {
  const slider = document.querySelector(".slider__slider")
  const onePercent = slider.clientWidth / 100;
  return [onePercent, onePercent]
}