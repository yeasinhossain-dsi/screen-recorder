window.addEventListener("load", () => {
  alert("Yeasin");
  const videoElem = document.getElementById("previewVideo");
  const configuration = {
    audio: false,
    video: true
  };

  navigator.mediaDevices.getUserMedia(configuration).then(stream => {
    // @ts-ignore
    videoElem.srcObject = stream;
  });
});
