import config from "./config.js";
export default {
  fetchCountries(searchQuery) {
    // if ( == "") {
    //   resultMessage(error, "You didn`t insert country name ");
    // }
    return fetch(`${config.url}${searchQuery}`).then((response) =>
      response.status === 200 ? response.json() : "",
    );
  },
};
