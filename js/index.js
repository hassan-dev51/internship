let notification = document.getElementById("notification");
let notificationHide = document.querySelector(".notification-hide");
let btn = document.querySelector(".slide-video-overlay");
let cross = document.querySelector(".close");
let trailer = document.querySelector(".trailer");
let video = document.querySelector("video");
let navbar = document.querySelector(".secondary-navbar");
let topOfNav = navbar.offsetHeight;
let burger = document.querySelector(".burger");
let utilityNavbar = document.querySelector(".utility-navbar");
let topOfUtilityBar = utilityNavbar.offsetHeight;
console.log(topOfUtilityBar);
//to stick the navbar
window.addEventListener("scroll", () => {
  if (window.scrollY >= topOfNav) {
    document.body.style.paddingTop = topOfNav + "px";
    navbar.classList.add("fixed");
    navbar.classList.add("translate");
  }
  if (window.scrollY >= topOfUtilityBar) {
    // document.body.style.paddingTop = topOfUtilityBar + "px";
    utilityNavbar.classList.add("fixed");
  } else {
    document.body.style.paddingTop = 0;
    navbar.classList.remove("translate");
    utilityNavbar.classList.remove("fixed");
    navbar.classList.remove("fixed");
  }
});

//to play video
btn.addEventListener("click", () => {
  trailer.classList.add("active");
});

//to remove video
cross.addEventListener("click", () => {
  trailer.classList.remove("active");
});

//to remove the notification
notificationHide.addEventListener("click", function remove() {
  notification.remove();
});

video.pause();
video.currentTime = 0;

//to resposive the navbar
burger.addEventListener("click", () => {
  navbar.classList.toggle("v-class");
  navbar.classList.toggle("h-class");
});
