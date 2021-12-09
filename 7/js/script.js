const photos = [
  "img/1.jpg",
  "img/2.jpg",
  "img/3.jpg",
  "img/4.jpg",
  "img/5.jpg",
  "img/6.jpg",
];
const titles = Array(15).fill("Photo");
const week = [
  "Воскресение",
  "Понедельник",
  "Вторник",
  "Среда",
  "Четверг",
  "Пятница",
  "Суббота",
];
const months = [
  "Январь",
  "Февраль",
  "Март",
  "Апрель",
  "Май",
  "Июнь",
  "Июль",
  "Август",
  "Сентябрь",
  "Октябрь",
  "Ноябрь",
  "Декабрь",
];
const pageVisitsCount = {};
var openImage, showHobbies, showImages, startCalendar, validateTest;
openImage = function () {
  var i, img__background, img__content, img__open;
  img__content = document.querySelectorAll(".content__image");
  img__open = document.querySelector(".big-image");
  img__background = document.querySelector(".image-background");
  i = 0;
  while (i < img__content.length) {
    img__content[i].addEventListener("click", function () {
      var context;
      img__open.style.display = "block";
      img__background.style.display = "block";
      img__open.innerHTML = "";
      context = '<img title ="Photo# ' + i + '" src="img/1.jpg"}">';
      img__open.insertAdjacentHTML("beforeend", context);
    });
    i++;
  }
  img__background.addEventListener("click", function () {
    img__open.style.display = "none";
    img__background.style.display = "none";
  });
};

showImages = function () {
  var div, i, image, imageName;
  i = 0;
  while (i < photos.length) {
    div = document.createElement("div");
    div.className = "col";
    image = document.createElement("img");
    image.src = photos[i];
    image.className = "content__image";
    image.setAttribute("dataenlargeable", null);
    imageName = document.createElement("p");
    imageName.textContent = titles[i] + " " + (i + 1).toString();
    document
      .getElementsByClassName("image-gallery")[0]
      .appendChild(div)
      .append(image, imageName);
    i++;
  }
};

showHobbies = function () {
  var args, content, header, hobbyCntainer, i, parent;
  args = [
    {
      title: "ASD",
      content: "test",
    },
    {
      title: "Hobby2",
      content: "test2",
    },
    {
      title: "Hoob1",
      content: "testtestesr",
    },
  ];
  parent = document.getElementsByClassName("content__body")[0];
  i = 0;
  while (i < args.length) {
    hobbyCntainer = document.createElement("div");
    hobbyCntainer.className = "content__body";
    header = document.createElement("h3");
    header.textContent = args[i]["title"];
    header.className = "content__header";
    content = document.createElement("article");
    content.textContent = args[i]["content"];
    hobbyCntainer.appendChild(header);
    hobbyCntainer.appendChild(content);
    parent.append(hobbyCntainer);
    i++;
  }
};
startCalendar = function () {
  var i;
  var i;
  var option;
  var calendarDays, calendarMonths, calendarYears, i, option;
  calendarDays = document.getElementsByClassName("calendar__element");
  i = 0;
  while (i < calendarDays.length) {
    calendarDays[i].addEventListener("click", function () {
      var j;
      j = 0;
      while (j < calendarDays.length) {
        calendarDays[j].classList.remove("chosen");
        j++;
      }
      calendarDays[i].classList.add("chosen");
    });
    i++;
  }
  calendarMonths = document.getElementById("calendar__month");
  i = 0;
  while (i < months.length) {
    option = document.createElement("option");
    option.value = months[i];
    option.textContent = months[i];
    calendarMonths.appendChild(option);
    i++;
  }
  calendarYears = document.getElementById("calendar__year");
  i = 2021;
  while (i > 1970) {
    option = document.createElement("option");
    option.value = i;
    option.textContent = i;
    calendarYears.appendChild(option);
    i--;
  }
};

validateTest = function (tag) {
  var words;
  words = wordCounter(tag.value);
  if (tag.value === "" || words < 30) {
    tag.setCustomValidity("Недостаточно слов");
  } else {
    tag.setCustomValidity("");
  }
};
window.onload = () => {
  const submitBtn = document.getElementsByClassName("submit")[0];
  try {
    showImages();
    // openImage();
  } catch (error) {
    console.log(error);
  }
  try {
    startCalendar();
  } catch (error) {
    console.log(error);
  }
  if (document.title.slice(-7) == "Hobbies") {
    showHobbies();
  }
  popover();

  let intervalId = setInterval(getTime, 1000);
  appendPageVisitsCount();

  document.getElementById("name").addEventListener("change", () => {
    validateName(document.getElementById("name"));
    submitBtn.click();
  });

  document.getElementById("email").addEventListener("change", () => {
    submitBtn.click();
  });
};

$(document).ready(function () {
  $("img[dataenlargeable]")
    .addClass("img-enlargeable ")
    .click(function () {
      let src = $(this).attr("src");
      let modal;

      function removeModal() {
        modal.remove();
        $("body").off("keyup");
      }
      modal = $("<div>")
        .addClass("active")
        .css({
          background: "RGBA(0,0,0,.5) url(" + src + ") no-repeat center",
          backgroundSize: "contain",
          width: "100%",
          height: "100%",
          position: "fixed",
          zIndex: "10000",
          top: "0",
          left: "0",
          cursor: "zoom-out",
        })
        .attr("path", src)
        .appendTo(".image-gallery");
      $(".active").append($("<span>", { class: "prev", text: "Previous" }));
      $(".active").append($("<span>", { class: "next", text: "Next" }));
      $(".active").append($("<span>", { class: "close", text: "Close" }));
      $(".close").click(function () {
        removeModal();
      });
      $(".image-gallery").on("keyup", function (e) {
        if (e.keycode === 13) {
          removeModal();
        }
      });
      $(".next").on("click", function () {
        let currentImage = $(".active");
        currentPhotoInSlider = photos.indexOf(currentImage.attr("path"));
        const newPhoto =
          photos[
            currentPhotoInSlider < photos.length - 1
              ? ++currentPhotoInSlider
              : 0
          ];
        currentImage.css(
          "background",
          `RGBA(0,0,0,.5) url("${newPhoto}") no-repeat center`
        );
        currentImage.attr("path", newPhoto);
      });

      $(".prev").on("click", function () {
        let currentImage = $(".active");
        currentPhotoInSlider = photos.indexOf(currentImage.attr("path"));
        const newPhoto =
          photos[
            currentPhotoInSlider > 0
              ? --currentPhotoInSlider
              : photos.length - 1
          ];
        console.log(currentPhotoInSlider);
        currentImage.css(
          "background",
          `RGBA(0,0,0,.5) url("${newPhoto}") no-repeat center`
        );
        currentImage.attr("path", newPhoto);
      });
    });

  $("#dialog").dialog({
    height: "auto",
    width: 500,
    modal: true,
  });
  $(".container").css({ filter: "blur(4px)" });

  $(".ui-button").on("click", function () {
    console.log(1);
    $(".container").css("filter", "blur(0)");
  });
});

function popover() {
  const fioPop = $("#name"),
    datePop = $(".calendar__title");
  console.log(fioPop);

  fioPop.on("mouseover", () => {
    $("#name").siblings(".popover").css("display", "flex");
  });
  fioPop.on("mouseout", () => {
    setTimeout(() => {
      $("#name").siblings(".popover").css("display", "none");
    }, 3000);
  });
  datePop.on("mouseover", () => {
    $(".calendar__title").siblings(".popover").css("display", "flex");
  });
  datePop.on("mouseout", () => {
    setTimeout(() => {
      $(".calendar__title").siblings(".popover").css("display", "none");
    }, 3000);
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
  const words = wordCounter(tag.value);
  const remaining = 30 - words;
  if (tag.value == "" || words < 30) {
    tag.setCustomValidity(`Введите еще ${remaining} слов`);
  } else {
    tag.setCustomValidity("");
  }
}

function validateName(tag) {
  const words = wordCounter(tag.value);
  if (words !== 3) {
    tag.setCustomValidity("Введите ФИО");
    tag.style.borderColor = "#ff0026";
  } else {
    tag.setCustomValidity("");
    tag.style.borderColor = "#000";
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

function showCalendar() {
  document.getElementById("calendar-dropdown").classList.toggle("show");
}

function getTime() {
  let today = new Date();
  let dateTime = `${today.getDate()}.${
    today.getMonth() + 1
  }.${today.getFullYear()} ${week[today.getDay()]}`;
  let time = document.getElementById("time");
  time.textContent = dateTime;
}

function appendPageVisitsCount() {
  const title = document.title.slice(7);
  localStorage[title] = Number(localStorage[title]) + 1 || 0;
  console.log(localStorage[title]);
  console.log(title);
}

function getCookies() {
  const contentBody = document.getElementsByClassName("content__body")[0];
  for (let i = 0; i < localStorage.length; i++) {
    const historyData = `${localStorage.key(i)}: ${
      localStorage[localStorage.key(i)]
    }`;
    contentBody.append(historyData);
  }
}

// setCookies(name, value, expirationDays){

// }
