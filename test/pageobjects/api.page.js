const Page = require("./page");
const fetch = require("node-fetch");

/**
 * sub page containing specific selectors and methods for a specific page
 */
class ApiPage extends Page {
    async getData(url = '', data = {}) {

      const response = await fetch(url, {
        method: "POST", // *GET, POST, PUT, DELETE, etc.
        mode: "cors", // no-cors, *cors, same-origin
        cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
        credentials: "same-origin", // include, *same-origin, omit
        headers: {
          "Content-Type": "application/json",
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        redirect: "follow", // manual, *follow, error
        referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
        // body: JSON.stringify(data), // body data type must match "Content-Type" header
      });
            console.log(response);

      return response.json();
  };
  
  // callData() {
  //   this.getData("https://example.com/answer", { answer: 42 });
  // }

    // .then(data => {
      //   console.log(data); // JSON data parsed by `data.json()` call
      // });
      
  open () {
    return super.open("202/my/");
  }
}

module.exports = new ApiPage();
