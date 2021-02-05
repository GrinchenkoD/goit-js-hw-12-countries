export default {
  fetchCountries(searchQuery) {
    // if ( == "") {
    //   resultMessage(error, "You didn`t insert country name ");
    // }
    return fetch(
      `https://restcountries.eu/rest/v2/name/${searchQuery}`,
    ).then((response) => (response.status === 200 ? response.json() : ""));
  },
};
