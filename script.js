//API is open, no authentication reuired

const url = "https://acnhapi.com/v1/fish/";

const characterContainer = document.querySelector(".char-container");

function displayUI(fishData) {
  console.log(fishData);
  for (fish in fishData) {
    console.log(fish.price);
    let htmlTemplate = `
    <div class="card">
      <h1>Price: ${fish["price"]}</h1>
      <img src="${fish.img_uri}" alt="fish" width="250" height="250">
    </div>
  `;

    characterContainer.insertAdjacentHTML("beforeend", htmlTemplate);
  }
}

async function fetchChars() {
  let response = await axios(url);
  // console.log(response.data);
  displayUI(response.data);
}

fetchChars();

// <p>Personality: ${villager.personality}</p>
// <p>Species: ${villager.height}</p>
// <p>Catchphrase: ${villager.mass}</p>
