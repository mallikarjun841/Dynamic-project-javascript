let container = document.getElementById("bgContainer");
let userinput = document.getElementById("themeUserInput");
let light =
  "url('https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/change-theme-light-bg.png')";
let dark =
  "url('https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/change-theme-dark-bg.png')";
let heading = document.getElementById("heading");
userinput.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    let user = userinput.value;

    if (user === "Dark") {
      container.style.backgroundImage = dark;
      heading.style.color = "white";
      userinput.value = "";
    } else if (user === "Light") {
      container.style.backgroundImage = light;
      heading.style.color = "#014d40";
      userinput.value = "";
    } else {
      alert("Enter correct text");
    }
  }
});
