const profile = document.querySelector(".profile");
const share = document.querySelector(".share");
const profileShareBtn = document.querySelector(".profile__share-btn");
const shareShareBtn = document.querySelector(".share__icon-share");

profileShareBtn.addEventListener("click", () => {
  if (window.innerWidth < 700) {
    share.style.display = "flex";
    profile.style.display = "none";
  }

  if (window.innerWidth > 700) {
    if (share.style.display == "none" && profileShareBtn.style.backgroundColor != "hsl(212, 23%, 69%)") {
      share.style.display = "flex";
      profileShareBtn.style.backgroundColor = "hsl(212, 23%, 69%)";
    } else {
      share.style.display = "none";
      profileShareBtn.style.backgroundColor = "hsl(210, 46%, 95%)";
    }
  }
});

shareShareBtn.addEventListener("click", () => {
  if (window.innerWidth < 700) {
    profile.style.display = "flex";
    share.style.display = "none";
  }
});
