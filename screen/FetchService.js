export default class FetchService{
  static url = "https://api.myjson.com/bins/8n9fd";

  static request(){
    return fetch(FetchService.url)
      .then((response) => response.json())
      .then((responseJson) => {
        return responseJson;
      })
      .catch((error) => {
        console.error(error);
    });
  }
}
