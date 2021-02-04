import "./css/styles.css";

import debounce from "lodash/debounce";

import obj from "./js/fetchCountries.js";
// import "@pnotify/core/dist/BrightTheme.css";
// import "@pnotify/core/dist/Material.css";
// import "material-design-icons/iconfont/material-icons.css";
// //
// import {
//   alert,
//   defaultModules,
// } from "node_modules/@pnotify/core/dist/PNotify.js";
// import * as PNotifyMobile from "node_modules/@pnotify/mobile/dist/PNotifyMobile.js";

// defaultModules.set(PNotifyMobile, {});
//
//----  Название страны для поиска пользователь вводит в текстовое поле.
// HTTP-запросы на бекенд происходят при наборе имени страны в инпуте, то есть по событию input
//
// ----на обработчик события необходимо применить подход debounce и делать HTTP-запрос спустя 500мс
//
// ----Если бекенд вернул больше чем 10 стран подошедших под критерий введенный пользователем,
//     в интерфейсе отображается нотификация о том, что необходимо сделать запрос более специфичным
//
// ----Если бекенд вернул от 2-х до 10-х стран, под инпутом отображается список имен найденных стран.
// //
// ----Если бекенд вернул массив с одной страной, в интерфейсе рендерится разметка с данными о стране:
// название, столица, население, языки и флаг.

//https://restcountries.eu/rest/v2/name/{name}
//

//
const input = document.querySelector("#input");

input.addEventListener(
  "input",
  debounce((e) => {
    obj.fetchCountries(e.target.value);
  }, 500),
);
