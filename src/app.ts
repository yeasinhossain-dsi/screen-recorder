window.addEventListener("load", () => {
  const videoElem = document.getElementById("previewVideo") as HTMLVideoElement;
  const configuration: MediaStreamConstraints = {
    audio: false,
    video: true
  };

  navigator.mediaDevices
    .getUserMedia(configuration)
    .then((stream: MediaStream) => {
      videoElem.srcObject = stream;
    })
    .catch(err => {
      console.error(Object.keys(err));
    });
});
