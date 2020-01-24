window.addEventListener("load", function () {
    alert("Yeasin");
    var videoElem = document.getElementById("previewVideo");
    var configuration = {
        audio: false,
        video: true
    };
    navigator.mediaDevices.getUserMedia(configuration).then(function (stream) {
        videoElem.srcObject = stream;
    });
});
//# sourceMappingURL=main.js.map