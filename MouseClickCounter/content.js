document.addEventListener("click", () => {
  chrome.runtime.sendMessage("mouse_clicked");
});
