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

function showHobbies() {
  let args = [
    { title: "ASD", content: "test" },
    { title: "Hobby2", content: "test2" },
    { title: "Hoob1", content: "testtestesr" },
  ];
  let parent = document.getElementsByClassName("interests__content")[0];
  args.forEach((element) => {
    let hobbyCntainer = document.createElement("div");
    hobbyCntainer.className = "interests__element";
    let header = document.createElement("h3");
    header.textContent = element["title"];
    header.className = "element__header";
    let content = document.createElement("article");
    content.textContent = element["content"];
    hobbyCntainer.appendChild(header);
    hobbyCntainer.appendChild(content);
    parent.appendChild(hobbyCntainer);
  });
}

function wordCounter(text) {
  text = text.split(" ");
  let wordCount = 0;
  for (let i = 0; i < text.length; i++) {
    if (text[i] !== " ") {
      wordCount++;
    }
  }
  return wordCount;
}

function validateTest(tag) {
  let words = wordCounter(tag.value);
  if (words < 30) {
    tag.setCustomValidity("НЕТ");
  }
}

function validateName(tag) {
  let words = wordCounter(tag.value);
  if (words < 2 || words > 2) {
    tag.setCustomValidity("НЕТ");
  }
}

function onMouseOverImage(tag) {
  let image = tag.firstElementChild.firstElementChild;
  image.src = "img/2.jpg";
}

function onMouseOutImage(tag) {
  let image = tag.firstElementChild.firstElementChild;
  image.src = "img/logo.jpg";
}
