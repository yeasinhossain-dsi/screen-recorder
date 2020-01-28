window.addEventListener("load", function () {
    var videoElem = document.getElementById("previewVideo");
    var configuration = {
        audio: false,
        video: true
    };
    navigator.mediaDevices
        .getUserMedia(configuration)
        .then(function (stream) {
        videoElem.srcObject = stream;
    })["catch"](function (err) {
        console.error(Object.keys(err));
    });
});
//# sourceMappingURL=main.js.map