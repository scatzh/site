const next = document.getElementById("next");
var numImage = 0;

const themeList = ["light", "dark"];
document.documentElement.classList.add(themeList[numImage]);
next.addEventListener("click", () => {
  numImage++;
  if (numImage >= themeList.length) {
    numImage = 0;
    document.documentElement.classList.remove("dark", "light");
  }
  console.log(numImage >= themeList.length);
  console.log(numImage);

  document.documentElement.classList.add(themeList[numImage]);
});
