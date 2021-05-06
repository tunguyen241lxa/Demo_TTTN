const Page = require("./page");
const fetch = require("node-fetch");
const path = require("path");
const assert = require("assert");
const tesseract = require("node-tesseract-ocr");


const download = require("image-downloader");
// const vision = require("@google-cloud/vision");

// const client = new vision.ImageAnnotatorClient({
//   keyFilename: "../Demo_TTTN/test/mock/tttn-img.json",
// });


let x = null;
class CloudPage extends Page {
  get btnResetPassword() {
    return $('button[type="button"]');
  }
  get inputEmail() {
    return $("#form-email");
  }
  get roleResetPass() {
    return $("#form-usertype");
  }
  get capCha() {
    return $(".form-control-feedback img");
  }
  get inputImg() {
    return $("input#input");
  }
  get robot() {
    return $(".recaptcha-checkbox-border");
  }
  get testTry() {
    return $("h2#try-it-for-yourself");
  }
  // get textArea() {
  //   return $("textarea#extracted_text");
  // }
  async reset(emailUser) {
    // await (await this.btnResetPassword).click();
    await (await this.inputEmail).setValue(emailUser);
    await (await this.roleResetPass).selectByAttribute("value", "svcq");
  }

  async imageCapcha() {
    x = await (await this.capCha).getAttribute("src");
    return x;
  }

  async downloadImg(options = {}) {
    let { filename } = await download.image(options);
    return filename;
  }

  // async readImg(filename) {
  //   const config = {
  //     lang: "eng",
  //     // oem: 1,
  //     // psm: 3,
  //   };
  //   console.log("filename ",filename)
  //   tesseract.recognize(filename, config)
  //     .then((text) => {
  //       console.log("Result:", text);
  //     })
  //     .catch((error) => {
  //       console.log(error.message);
  //     });
  // }

  // async batchAnnotateFiles(fileName) {
  //   const [result] = await client.textDetection(fileName);
  //   const detections = result.textAnnotations;
  //   console.log("Text:");
  //   detections.forEach((text) => console.log(text));
  // }

  /**
   * overwrite specifc options to adapt it to page object
   */
  open() {
    return super.open("forgotpwd");
  }
}

module.exports = new CloudPage();
