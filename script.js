const profile = document.querySelector(".profile");
const share = document.querySelector(".share");
const profileShareBtn = document.querySelector(".profile__share-btn");
const shareShareBtn = document.querySelector(".share__icon-share");

profileShareBtn.addEventListener("click", () => {
  profile.style.display = "none";
  share.style.display = "flex";
});

shareShareBtn.addEventListener("click", () => {
  profile.style.display = "flex";
  share.style.display = "none";
});
