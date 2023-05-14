let petsImageUrls = {
  dog: "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/select-your-pet-dog-img.png",
  cat: "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/select-your-pet-cat-img.png",
  parrot:
    "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/select-your-pet-parrot-img.png",
  spider:
    "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/select-your-pet-spider-img.png",
  rabbit:
    "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/select-your-pet-rabbit-img.png",
};
let petselectform = document.getElementById("petSelect");
let imgchange = document.getElementById("petImg");
petselectform.addEventListener("change", function (event) {
  let valueinput = petselectform.value;
  let petimage = petsImageUrls[valueinput];
  imgchange.src = petimage;
});
