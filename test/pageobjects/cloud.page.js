const Page = require("./page");
const fetch = require("node-fetch");
const assert = require("assert");
const { ImageAnnotatorClient } = require("@google-cloud/vision");
const download = require("image-downloader");

const client = new ImageAnnotatorClient({
  keyFilename: "./ggconfig.json",
});
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
    return $("input[id=input]");
  }
  get robot() {
    return $(".recaptcha-checkbox-border");
  }
  async reset(emailUser) {
    // await (await this.btnResetPassword).click();
    await (await this.inputEmail).setValue();
    await (await this.roleResetPass).selectByAttribute("value", "svcq");
  }

  async imageCapcha() {
    x = await (await this.capCha).getAttribute("src");
    return x;
  }

  
  async downloadImg(options = {}) {
    let { filename } = await download.image(options);
    return filename
  }
  
  async cloudVision() {
    await browser.newWindow(
      "https://cloud.google.com/vision/docs/drag-and-drop"
    );
    const filePath = "./test/img/img.png";
    const remoteFilePath = await browser.uploadFile(filePath);
    await (await this.inputImg).setValue(remoteFilePath);
    await (await this.robot).click();
  }

  
  /**
   * overwrite specifc options to adapt it to page object
   */
  open() {
    return super.open("forgotpwd");
  }
}

module.exports = new CloudPage();
