//API is open, no authentication reuired

const url = "https://acnhapi.com/v1/villagers/";

const villagerContainer = document.querySelector(".villager-container");
const gallery = document.querySelector(".gallery");
const galleryItems = villagerContainer.querySelectorAll(".villager-card");
const leftBtn = document.querySelector(".left");
const rightBtn = document.querySelector(".right");

function displayUI(dataObj) {
  console.log(dataObj);
  for (const villager in dataObj) {
    // console.log(villager);
    // console.log(dataObj[villager]["catch-phrase"]);
    // console.log(dataObj[villager]["image_uri"]);
    // console.log(dataObj[villager]["name"]["name-USen"]);

    let htmlTemplate = `
    <div class="villager-card">
      <h2>${dataObj[villager]["name"]["name-USen"]}</h2>
      <div class="gen-info" >
        <p>Species: ${dataObj[villager]["species"]}</p>
        <p>Personality: ${dataObj[villager]["personality"]}</p>
        <p>Catchphrase: "${dataObj[villager]["catch-phrase"]}"</p>
      </div>

      <img src="${dataObj[villager]["image_uri"]}" alt="${dataObj[villager]["name"]["name-USen"]} fish" width="250" height="250">

    </div>
  `;

    gallery.insertAdjacentHTML("beforeend", htmlTemplate);
  }
}

async function fetchChars() {
  let response = await axios(url);
  // console.log(response.data);
  displayUI(response.data);
  leftBtn.addEventListener("click", slideLeft);
  rightBtn.addEventListener("click", slideRight);
  compareValue();
}

fetchChars();

let currentSlide = 0;
function slideRight() {
  const galleryItems = villagerContainer.querySelectorAll(".villager-card");
  const slideCount = galleryItems.length;
  const width = 1000;
  console.log(currentSlide);
  if (currentSlide < slideCount) {
    console.log("Right Slide");
    currentSlide += 1;
    gallery.style.transform = `translateX(-${width * (currentSlide - 195)}px)`;
    console.log(currentSlide);
    console.log(gallery.style.transform);
  } else {
    gallery.style.transform = `tranlsateX(0)`;
    console.log("Reset");
    currentSlide = 1;
  }
}

function slideLeft() {
  const galleryItems = villagerContainer.querySelectorAll(".villager-card");
  const slideCount = galleryItems.length;
  const width = galleryItems[0].clientWidth;
  console.log(currentSlide);
  if (currentSlide < slideCount) {
    console.log("Left Slide");
    currentSlide--;
    gallery.style.transform = `translateX(-${width * (currentSlide - 195)}px)`;
    console.log(currentSlide);
  } else {
    gallery.style.transform = `tranlsateX(0)`;
    currentSlide = 1;
  }
}
function compareValue() {
  let form = document.querySelector(".search-form");
  // let body = document.querySelector("body");
  let villagers = document.querySelectorAll(".villager-card");

  form.addEventListener("submit", function (e) {
    console.log(e.target[0].value);
    e.preventDefault();
    const galleryItems = villagerContainer.querySelectorAll(".villager-card");
    // const width = galleryItems[0].clientWidth;
    console.log(currentSlide + "Submit");
    let response = e.target[0].value;
    // console.log(villagers);
    villagers.forEach((villager, index) => {
      // console.log(villager);
      if (response == villager.firstElementChild.innerText) {
        // console.log(response);
        // console.log(villager);
        // currentSlide = index;
        console.log(currentSlide);
        gallery.style.transform = `translateX(${1000 * (195 - index)}px)`;
        currentSlide = index;
        //filter thru villagers , if villager == response then grab the index (indexOf) of that specific villager
        console.log(gallery.style.transform);
        console.log(currentSlide + "After Transform");
        console.log(index);
        e.target.elements.search.value = "";
        //replace current card with specific villager (trach by name or other)
      }
    });
  });
}
// form.addEventListener("input", function (e) {
//   e.preventDefault();
//   let response = form.elements.search.value;
//   charactersList.forEach((characterDiv) => {
//     if (characterDiv.dataset.name.includes(response)) {
//       characterDiv.classList.remove("hide");
//     } else {
//       characterDiv.classList.add("hide");
//     }
//   });
//   console.log(charactersList[0].classList);
// });
