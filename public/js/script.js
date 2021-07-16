const inputTextElement = document.querySelector("#input-text");
const inputBtnElement = document.querySelector("#input-btn");

const outputShortLinkElement = document.querySelector("#output-short-link");

const outputDivElement = document.querySelector(".output");
const errorDivElement = document.querySelector(".error");

const api = "http://localhost:3000/url/";

window.onload = () => {
  inputTextElement.focus();
};

const executeSURL = function executeSURL() {
  const longUrl = inputTextElement.value;
  fetch(api, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      longUrl: longUrl,
    }),
  })
    .then((res) => {

      if (res.status === 200) {
        return res.json();
      } else {
        throw new Error(`Api not responding`);
      }
    })
    .then((data) => {
      outputShortLinkElement.innerText = data.shortUrl;
      outputShortLinkElement.href = data.shortUrl;
      outputDivElement.style.display = "block";
      //outputDivElement.style.visibility = "visible";
    })
    .catch((error) => {
      console.error("Api not responding!!");
      errorDivElement.style.display = "block";
      //errorDivElement.style.visibility = "visible";
    });
};
