const photos = Array(15).fill("img/1.jpg");
const titles = Array(15).fill("Photo");
const week = {
  1: "Понедельник",
  2: "Вторник",
  3: "Среда",
  4: "Четверг",
  5: "Пятница",
  6: "Суббота",
  0: "Воскресение",
};

let intervalId = setInterval(() => getTime(), 1000);

onclick = function (event) {
  if (!event.target.matches(".dropdown-btn")) {
    let dropdowns = document.getElementsByClassName("dropdown-content");
    for (let i = 0; i < dropdowns.length; i++) {
      let openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("show")) {
        openDropdown.classList.remove("show");
      }
    }
  }
};

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

function initHobbyObjects() {
  showHobbies(
    { title: "ASD", content: "test" },
    { title: "Hobby2", content: "test2" },
    { title: "Hoob1", content: "testtestesr" }
  );
}

function wordCounter(text) {
  return text.split(" ").length;
}

function validateTest(tag) {
  let words = wordCounter(tag.value);
  if (words < 30) {
    tag.setCustomValidity("НЕТ");
  } else {
    tag.setCustomValidity("");
  }
}

function validateName(tag) {
  let words = wordCounter(tag.value);
  if (words < 2 || words > 2) {
    tag.setCustomValidity("НЕТ");
  } else {
    tag.setCustomValidity("");
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

function showDropdown() {
  document.getElementById("hobbies-dropdown").classList.toggle("show");
}

function getTime() {
  let today = new Date();
  let date = today.getFullYear().toString();
  date = today.getMonth() + 1 + "." + date.slice(-2);
  let time = today.getHours().toString();
  let dateTime = time + "." + date.toString() + " " + week[today.getDay()];
  let text = document.getElementById("time");
  text.textContent = dateTime;
}
