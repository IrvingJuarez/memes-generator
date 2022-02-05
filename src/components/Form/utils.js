import html2canvas from "html2canvas";

export const handleDownload = (setIsFulfilled) => {
  html2canvas(document.querySelector(".meme__final")).then((canvas) => {
    let lnk = document.createElement("a"),
      e;
    lnk.download = "meme.png";
    lnk.href = canvas.toDataURL("image/png;base64");
    if (document.createEvent) {
      e = document.createEvent("MouseEvents");
      e.initMouseEvent(
        "click",
        true,
        true,
        window,
        0,
        0,
        0,
        0,
        0,
        false,
        false,
        false,
        false,
        0,
        null
      );

      lnk.dispatchEvent(e);
    } else if (lnk.fireEvent) {
      lnk.fireEvent("onclick");
    }
  }).then(() => {
    setIsFulfilled(true)
  }, () => {
    // todo: handle the error
    console.log("Rejected")
  });
};
