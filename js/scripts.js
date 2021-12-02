function newTab(pathString) {
  window.open("https://backinthegame.thinkific.com/courses/back-in-the-game", "_blank");
};

function showGoogle() {
var elem = document.getElementById("podcasts-box");
if (elem.classList.contains("purpleBoxP")) {
  elem.classList.remove("purpleBoxP");
}
if (elem.classList.contains("spotifyBox")) {
  elem.classList.remove("spotifyBox");
}
if (elem.classList.contains("appleBox")) {
  elem.classList.remove("appleBox");
}
elem.classList.add("googleBox");
setTimeout(function() { showPodcasts(); }, 1000);
}

function showSpotify() {
var elem = document.getElementById("podcasts-box");
if (elem.classList.contains("purpleBoxP")) {
  elem.classList.remove("purpleBoxP");
}
if (elem.classList.contains("googleBox")) {
  elem.classList.remove("googleBox");
}
if (elem.classList.contains("appleBox")) {
  elem.classList.remove("appleBox");
}
elem.classList.add("spotifyBox");
setTimeout(function() { showPodcasts(); }, 1000);
}

function showApple() {
var elem = document.getElementById("podcasts-box");
if (elem.classList.contains("purpleBoxP")) {
  elem.classList.remove("purpleBoxP");
}
if (elem.classList.contains("googleBox")) {
  elem.classList.remove("googleBox");
}
if (elem.classList.contains("spotifyBox")) {
  elem.classList.remove("spotifyBox");
}
elem.classList.add("appleBox");
setTimeout(function() { showPodcasts(); }, 1000);
}

function showPodcasts() {
var elem = document.getElementById("podcasts-box");
if (elem.classList.contains("purpleBoxP")) return;
if (elem.classList.contains("googleBox")) {
  elem.classList.remove("googleBox");
}
if (elem.classList.contains("spotifyBox")) {
  elem.classList.remove("spotifyBox");
}
if (elem.classList.contains("appleBox")) {
  elem.classList.remove("appleBox");
}
elem.classList.add("purpleBoxP");
}


document.getElementById("contact").addEventListener("submit",event => {
  event.preventDefault(); 
  if (!(document.getElementById("email-input").value.includes("@"))) {
    document.getElementById("errorDisplay").innerText = "Please enter a valid email";
  }
});