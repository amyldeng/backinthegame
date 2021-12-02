/** To open new page when "contact us" pop up is clicked*/
function newTab(pathString) {
  window.open("https://backinthegame.thinkific.com/courses/back-in-the-game", "_blank");
};

/* To show color of google podcast*/
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

/*Show color of spotify podcast*/
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

/*Show color when Apple podcast is hovered over */
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

/*Email validation, gives error if not valid email address */
document.getElementById("contact").addEventListener("submit",event => {
event.preventDefault(); 
if (!(document.getElementById("email-input").value.includes("@"))) {
  document.getElementById("errorDisplay").innerText = "Please enter a valid email";
}
});