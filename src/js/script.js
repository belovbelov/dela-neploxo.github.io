const photos = Array(15).fill("img/1.jpg");
const titles = Array(15).fill("Photo");

function showImages() {
  for (let i = 0; i < photos.length; i++) {
    let div = document.createElement("div");
    div.className = "col";
    let image = document.createElement("img");
    image.src = photos[i];
    image.className = "image";
    let imageName = document.createElement("p");
    imageName.textContent = titles[i] + " " + (i + 1).toString();
    document
      .getElementsByClassName("gallery")[0]
      .appendChild(div)
      .append(image, imageName);
  }
}
