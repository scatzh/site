const imageList = ["banner3.png", "banner5.png"];
const imageList1 = ["smallbann.png", "blacksmallbann.png"];
const imageList2 = ["plansh.png", "planshblack.png"];
const img = document.querySelector(".img");
const img2 = document.querySelector(".img2");
const img3 = document.querySelector(".img3");
const next = document.getElementById("next");
var numImage = 0;
img.src = imageList[numImage];
const themeList = ["light", "dark"];
document.documentElement.classList.remove("dark", "light");
document.documentElement.classList.add(themeList[numImage]);
img2.src = imageList1[numImage];
img3.src = imageList2[numImage];
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
  img3.src = imageList2[numImage];
  img2.src = imageList1[numImage];
});
