// Variables
const progress = document.getElementById("progress");

// Properties
// progress.value = The calculated progress value as a percent of 100
// video.currentTime = The current time of the video in seconds
// video.duration = The length of the video in seconds

function progressLoop() {
  setInterval(function () {
    document.getElementById("progress").value = Math.round((video.currentTime / video.duration) * 100);
  });
}
