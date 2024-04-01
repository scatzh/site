const imageList = ["banner3.png", "banner5.png"];
const img = document.querySelector(".img");
const next = document.getElementById("next");
var numImage = 0;
img.src = imageList[numImage];

const themeList = ["light", "dark"];
document.documentElement.classList.remove("dark", "light");
document.documentElement.classList.add(themeList[numImage]);
next.addEventListener("click", () => {
  numImage++;
  if (numImage >= imageList.length) {
    numImage = 0;
    document.documentElement.classList.remove("dark", "light");
  }
  console.log(numImage >= imageList.length);
  console.log(numImage);
  img.src = imageList[numImage];
  document.documentElement.classList.add(themeList[numImage]);
});
