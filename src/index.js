import "./css/styles.css";
//
import debounce from "lodash/debounce";
import "@pnotify/core/dist/PNotify.css";
import "@pnotify/core/dist/BrightTheme.css";
import { error } from "@pnotify/core";
import soloResponseTpl from "./templates/soloResponse.hbs";
import listResponseTpl from "./templates/twoToTenResponse.hbs";
//
import obj from "./js/fetchCountries.js";
//
const container = document.querySelector(".container");
const input = document.querySelector("#input");

input.addEventListener(
  "input",
  debounce((e) => {
    obj
      .fetchCountries(e.target.value)
      .then((data) => {
        if (data.length === 0) {
          resultMessage(error, "Invalid country name. Check it please");
          container.innerHTML = "";
        } else if (data.length === 1) {
          container.innerHTML = soloResponseTpl(data);
        } else if (data.length >= 2 && data.length <= 10) {
          container.innerHTML = listResponseTpl(data);
        } else if (data.length > 10) {
          container.innerHTML = "";
          resultMessage(
            error,
            "Too many matches found. Please enter more specific query",
          );
        }
      })
      .catch((err) => console.log(err));
  }, 500),
);

function resultMessage(typeInfo, textInfo) {
  typeInfo({
    text: `${textInfo}`,
    delay: 5000,
    closerHover: true,
  });
}
