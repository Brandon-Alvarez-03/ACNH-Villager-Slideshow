//API is open, no authentication reuired

const url = "https://acnhapi.com/v1/villagers/";

const villagerContainer = document.querySelector(".villager-container");
const gallery = document.querySelector(".gallery");
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
    <li class="villager-card">
      <h2>${dataObj[villager]["name"]["name-USen"]}</h2>
      <div class="gen-info">
        <p>Species: ${dataObj[villager]["species"]}</p>
        <p>Personality: ${dataObj[villager]["personality"]}</p>
        <p>Catchphrase: "${dataObj[villager]["catch-phrase"]}"</p>
      </div>

      <img src="${dataObj[villager]["image_uri"]}" alt="${dataObj[villager]["name"]["name-USen"]} fish" width="250" height="250">

    </li>
  `;

    gallery.insertAdjacentHTML("afterbegin", htmlTemplate);
  }
}

async function fetchChars() {
  let response = await axios(url);
  // console.log(response.data);
  displayUI(response.data);
  leftBtn.addEventListener("click", slideLeft);
  rightBtn.addEventListener("click", slideRight);
}

fetchChars();

let currentSlide = 0;

function slideRight() {
  const galleryItems = villagerContainer.querySelectorAll(".villager-card");
  const slideCount = galleryItems.length;
  const width = galleryItems[0].clientWidth;

  if (currentSlide < slideCount) {
    console.log("Slide to the right", currentSlide);
    currentSlide += 1;
    gallery.style.transform = `translateX(-${width * currentSlide}px)`;
  } else {
    gallery.style.transform = `tranlsateX(0)`;
    currentSlide = 1;
  }
}

function slideLeft() {
  const galleryItems = villagerContainer.querySelectorAll(".villager-card");
  const slideCount = galleryItems.length;
  const width = galleryItems[0].clientWidth;

  if (currentSlide < slideCount) {
    console.log("Slide to the left!", currentSlide);
    currentSlide -= 1;
    console.log("Slide to the left! (After update)", currentSlide);
    gallery.style.transform = `translateX(-${width * currentSlide}px)`;
  } else {
    gallery.style.transform = `tranlsateX(0)`;
    currentSlide = 1;
  }
}
