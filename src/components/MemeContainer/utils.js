export const getRatio = (setMemeContainerState) => {
  setTimeout(() => {
    let ratio;
    const memeImg = document.querySelector(".meme__final");
    const h = memeImg.height;
    const w = memeImg.width;
    ratio = (h / w < 0.9) ? "rectangle" : "square"
    setMemeContainerState({
      loading: false,
      ratio: ratio
    })
  }, 1000)
}