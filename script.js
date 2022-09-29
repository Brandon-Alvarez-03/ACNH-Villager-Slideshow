//API is open, no authentication reuired

const url = "https://acnhapi.com/v1/fish/";

const characterContainer = document.querySelector(".char-container");

function displayUI(dataObj) {
  console.log(dataObj);
  for (const fish in dataObj) {
    console.log(fish);
    console.log(dataObj[fish]["catch-phrase"]);
    console.log(dataObj[fish]["image_uri"]);
    console.log(dataObj[fish]["name"]["name-USen"]);

    let htmlTemplate = `
    <div class="card">
      <h1>Name: ${dataObj[fish]["name"]["name-USen"]}</h1>
      <p>Catchphrase: ${dataObj[fish]["catch-phrase"]}</p>
      <img src="${dataObj[fish]["image_uri"]}" alt="${dataObj[fish]["name"]["name-USen"]} fish" width="400" height="250">

    </div>
  `;

    characterContainer.insertAdjacentHTML("afterend", htmlTemplate);
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
