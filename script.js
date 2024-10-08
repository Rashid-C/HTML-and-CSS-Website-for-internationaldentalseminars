let currentImageIndex = 0;
const images = ["/ava.jpg", "/profile.png", "/project-5 (2).png"];
const mainContent = document.querySelector(".main-content");

function changeBackgroundImage() {
  mainContent.style.backgroundImage = `url(${images[currentImageIndex]})`;
}

setInterval(changeBackgroundImage, 2000);
