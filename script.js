//API is open, no authentication reuired

const url = "https://acnhapi.com/v1/villagers/";

const villagerContainer = document.querySelector(".villager-container");
const gallery = document.querySelector(".gallery");

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
  setSlideshow();
}

fetchChars();

// <p>Personality: ${villager.personality}</p>
// <p>Species: ${villager.height}</p>
// <p>Catchphrase: ${villager.mass}</p>

// console.log(dataObj);
// for (const fish in dataObj) {
//   console.log(fish);
//   console.log(dataObj[fish]["catch-phrase"]);
//   console.log(dataObj[fish]["image_uri"]);
//   console.log(dataObj[fish]["name"]["name-USen"]);

//   let htmlTemplate = `
//   <div class="card">
//     <h1>Name: ${dataObj[fish]["name"]["name-USen"]}</h1>
//     <p>Catchphrase: ${dataObj[fish]["catch-phrase"]}</p>
//     <img src="${dataObj[fish]["image_uri"]}" alt="${dataObj[fish]["name"]["name-USen"]} fish" width="400" height="250">

//   </div>
// `;

//   characterContainer.insertAdjacentHTML("afterend", htmlTemplate);
// }
//use char container
// setTimeout(() => {
function setSlideshow() {
  const galleryItems = villagerContainer.querySelectorAll(".villager-card");
  const slideCount = galleryItems.length;
  console.log(slideCount);
  const width = galleryItems[0].clientWidth;
  console.log(width);
  let currentSlide = 1;
  function transitionSlide() {
    if (currentSlide < slideCount) {
      console.log("Called!");
      gallery.style.transform = `translateX(-${width * currentSlide}px)`;
      currentSlide += 1;
    } else {
      gallery.style.transform = `tranlsateX(0)`;
      currentSlide = 1;
    }
  }
  let setInter = setInterval(transitionSlide, 5000);
  setInter;
}
// }, 3500);

// const galleryItems = villagerContainer.querySelectorAll(".villager-card");
// const slideCount = galleryItems.length;
// console.log(slideCount);
// const width = galleryItems[0].clientWidth;
// console.log(width);
// let currentSlide = 1;
// function transitionSlide() {
//   if (currentSlide < slideCount) {
//     console.log("Called!");
//     gallery.style.transform = `translateX(-${width * currentSlide}px)`;
//     currentSlide += 1;
//   } else {
//     gallery.style.transform = `tranlsateX(0)`;
//     currentSlide = 1;
//   }
// }

// let setInter = setInterval(transitionSlide, 1000);
// setInter;
