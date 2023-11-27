const btnUploadFile = document.querySelector(".button");

function setButtonProgress(button, percent) {
  const textElement = button.querySelector(".button__text");

  button.querySelector(".button__progress").style.width = `${percent}%`;

  if (percent >= 0) {
    textElement.textContent = button.dataset.progressText;
  }

  if (percent >= 100) {
    textElement.textContent = button.dataset.completeText;
  }
}

function changeVideo(videoElement, videoSource) {
  videoElement.src = videoSource;
  videoElement.load();
}
