const photos = Array(15).fill("img/1.jpg");
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

window.onload = () => {
  const submitBtn = document.getElementsByClassName("submit")[0];
  // try {
  //   showImages();
  //   // openImage();
  // } catch (error) {
  //   console.log(error);
  // }
  try {
    startCalendar();
  } catch (error) {
    console.log(error);
  }
  if (document.title.slice(-7) == "Hobbies") {
    showHobbies();
  }

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
  $("img[data-enlargeable]")
    .addClass("img-enlargeable")
    .click(function () {
      let src = $(this).attr("src");
      let modal;

      function removeModal() {
        modal.remove();
        $("body").off("keyup.modal-close");
      }
      modal = $("<div>")
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
        .click(function () {
          removeModal();
        })
        .appendTo(".image-gallery");
      $(".image-gallery").on("keyup.modal-close", function (e) {
        if (e.key === "Escape") {
          removeModal();
        }
      });
    });

  $(".next").on("click", function () {
    let currentImage = $(".active");
    let nextIamge = currentImage.next();

    if (nextIamge.length) {
      currentImage.removeClass("active").css("z-index", -10);
      nextIamge.addClass("active").css("z-index", 10);
    }
  });

  $(".prev").on("click", function () {
    let currentImage = $(".active");
    let prevIamge = currentImage.prev();

    if (prevIamge.length) {
      currentImage.removeClass("active").css("z-index", -10);
      prevIamge.addClass("active").css("z-index", 10);
    }
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

function startCalendar() {
  const calendarDays = document.getElementsByClassName("calendar__element");
  for (const day of calendarDays) {
    day.addEventListener("click", () => {
      for (const element of calendarDays) {
        element.classList.remove("chosen");
      }
      day.classList.add("chosen");
    });
  }
  const calendarMonths = document.getElementById("calendar__month");
  for (let i = 0; i < months.length; i++) {
    let option = document.createElement("option");
    option.value = months[i];
    option.textContent = months[i];
    calendarMonths.appendChild(option);
  }

  const calendarYears = document.getElementById("calendar__year");
  for (let i = 2021; i > 1970; i--) {
    let option = document.createElement("option");
    option.value = i;
    option.textContent = i;
    calendarYears.appendChild(option);
  }
}

// function openImage() {
//   const img__content = document.querySelectorAll(".content__image");
//   const img__open = document.querySelector(".big-image");
//   const img__background = document.querySelector(".image-background");

//   img__content.forEach((img, i) => {
//     img.addEventListener("click", () => {
//       img__open.style.display = "block";
//       img__background.style.display = "block";
//       img__open.innerHTML = "";
//       let context = `
//         <img title ="Photo# ${i}" src="img/1.jpg"}">`;
//       img__open.insertAdjacentHTML("beforeend", context);
//     });
//   });

//   img__background.addEventListener("click", () => {
//     img__open.style.display = "none";
//     img__background.style.display = "none";
//   });
// }

// function showImages() {
//   for (let i = 0; i < photos.length; i++) {
//     let div = document.createElement("div");
//     div.className = "col";
//     let image = document.createElement("img");
//     image.src = photos[i];
//     image.className = "content__image";
//     image.setAttribute("data-enlargeable", null);
//     let imageName = document.createElement("p");
//     imageName.textContent = titles[i] + " " + (i + 1).toString();
//     document
//       .getElementsByClassName("image-gallery")[0]
//       .appendChild(div)
//       .append(image, imageName);
//   }
// }

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
