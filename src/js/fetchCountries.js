import "@pnotify/core/dist/PNotify.css";
import "@pnotify/core/dist/BrightTheme.css";
import { error } from "@pnotify/core";
import soloResponseTpl from "../templates/soloResponse.hbs";
import listResponseTpl from "../templates/twoToTenResponse.hbs";
const container = document.querySelector(".container");

export default {
  fetchCountries(searchQuery) {
    fetch(`https://restcountries.eu/rest/v2/name/${searchQuery}`)
      .then((response) => (response.status === 200 ? response.json() : ""))

      .then((data) => {
        data.length === 1
          ? (container.innerHTML = soloResponseTpl(data))
          : data.length >= 2 && data.length <= 10
          ? (container.innerHTML = listResponseTpl(data))
          : data.length > 10
          ? resultMessage(
              error,
              "Too many matches found. Please enter more specific query",
            )
          : "";
      })
      .catch((err) => console.log(err));
  },
};

function resultMessage(typeInfo, textInfo) {
  typeInfo({
    text: `${textInfo}`,
    delay: 5000,
    closerHover: true,
  });
}
