const photos = Array(15).fill("img/1.jpg");
const titles = Array(15).fill("Photo");

function showImages() {
  for (let i = 0; i < photos.length; i++) {
    let div = document.createElement("div");
    div.className = "col";
    let image = document.createElement("img");
    image.src = photos[i];
    image.className = "content__image";
    let imageName = document.createElement("p");
    imageName.textContent = titles[i] + " " + (i + 1).toString();
    document
      .getElementsByClassName("image-gallery")[0]
      .appendChild(div)
      .append(image, imageName);
  }
}

function showHobbies() {
  let args = [
    { title: "ASD", content: "test" },
    { title: "Hobby2", content: "test2" },
    { title: "Hoob1", content: "testtestesr" },
  ];
  let parent = document.getElementsByClassName("content__body")[0];
  args.forEach((element) => {
    let hobbyCntainer = document.createElement("div");
    hobbyCntainer.className = "content__body";
    let header = document.createElement("h3");
    header.textContent = element["title"];
    header.className = "content__header";
    let content = document.createElement("article");
    content.textContent = element["content"];
    hobbyCntainer.appendChild(header);
    hobbyCntainer.appendChild(content);
    parent.appendChild(hobbyCntainer);
  });
}

function wordCounter(text) {
  return text.split(" ").length;
}

function validateTest(tag) {
  let words = wordCounter(tag.value);
  if (words < 30) {
    tag.setCustomValidity("НЕТ");
  }
}

function validateName(tag) {
  let words = wordCounter(tag.value);
  if (words == 2) {
    tag.setCustomValidity("НЕТ");
  }
}
