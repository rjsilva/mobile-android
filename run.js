// javascript
const wdio = require("webdriverio");
const appium = require('appium');
const assert = require("assert");
const opts = require('./app/config/caps_android');
const App = require('./app/config/close-app');
const fs = require("fs");
const pngToJpeg = require('png-to-jpeg');  
const resizeImg = require('resize-img');
const { createCanvas, loadImage } = require('canvas');

async function main () {
  
  

   //start appium
   const server = await appium.main();

   //seta os capabilities no client
  const client = await wdio.remote(opts);

  const menu = await client.$('~Open navigation drawer');

  const eixoX = (await menu.getLocation()).x
  const eixoY = (await menu.getLocation()).y

  let screenshot = await client.takeScreenshot();

  let buff = new Buffer.from(screenshot, 'base64');

  //CANVAS
  const canvas = createCanvas(eixoX, eixoY)
  const ctx = canvas.getContext('2d')
  loadImage(buff).then(image => {
    ctx.beginPath();
    ctx.lineWidth = "6";
    ctx.strokeStyle = "red";
    ctx.rect(eixoX, eixoY, 30, 40);
    ctx.stroke();
  });

  await menu.click();
  
  const image = await resizeImg(buff, {
	      width: 200,
        height: 400,
        format: 'png'
  });



  //CONVERT
  pngToJpeg({quality: 90})(image).then(output => fs.writeFileSync("./some-file.jpeg", output));

  //deleta a sessão
  await client.deleteSession();

  //fecha o servidor
  await server.close();
  
  const app = new App();
  app.shutDownAndroidSimulator();

}

main();