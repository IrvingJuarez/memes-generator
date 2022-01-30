// updaters
export const handleAddingImg = (e, setImg, setLoading) => {
  if (e.target.files.length > 0) {
    setImg(e.target.files[0]);
    setLoading(true);
  }
};
// utils
export const getRatio = (setRatio, setLoading) => {
  setTimeout(() => {
    let ratio;
    const memeImg = document.querySelector(".meme__uploaded-img");
    const h = memeImg.height;
    const w = memeImg.width;

    if (h / w < 0.9) {
      ratio = "rectangle";
    } else {
      ratio = "square";
    }
    setLoading(false);
    setRatio(ratio);
  }, 1000);
};
