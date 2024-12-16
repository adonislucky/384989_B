let clickCount = 0;

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message === "mouse_clicked") {
    clickCount++;
    if (clickCount === 10) {
      clickCount = 0;
      playSound();
    }
  }
});

function playSound() {
  const audio = new Audio(chrome.runtime.getURL("sound.mp3"));
  audio.play();
}
