// javascript
const wdio = require("webdriverio");
const appium = require('appium');
const assert = require("assert");
const opts = require('./app/config/caps_ios');
const Simulator = require('./app/config/close-app');

async function main () {


  //start appium
  //const server = await appium.main();

  //seta os capabilities no client
  const iosDriver = await wdio.remote(opts);

  const toggleButton = await iosDriver.$('~toggleButton');
  await toggleButton.click();

  //debugger;
  const slider = await iosDriver.$('~sliderAction');

  //await slider.addValue(0.30);

  const getRandon = iosDriver.$('UIATarget.localTarget().frontMostApp().mainWindow().texts[0]');
  console.log("get Randon ==========================> " + getRandon);




  const texto = "quando clico no Get random";

  const intentions = [ "click", "fill", "scroll", "select"]
  const possebilities = [8, "Get random"]

  var possibility = "";

  switch(true){
    case texto.includes(8):
      possibility = possebilities[0];
      console.log("minha possibilidade é ==========================> " + possibility);
      break;
    case texto.includes("random"):
      possibility = possebilities[1];
      console.log("minha possibilidade é ==========================> " + possibility);
      break;
      default:
        console.log("não existe essa possibilidade ==========================> " + possibility)
  }

  var intention = "";

  switch(true){
    case texto.includes("clico"):
      intention = intentions[0];
      console.log("minha intenção é ==========================> " + intention);
      break;
      case texto.includes("preencher"):
        intention = intentions[1];
        console.log("minha intenção é ==========================> " + intention);
        break;
      case texto.includes("navego"):
        intention = intentions[2];
        console.log("minha intenção é ==========================> " + intention);
        break;
      case texto.includes("seleciono"):
        intention = intentions[3];
        console.log("minha intenção é ==========================> " + intention);
        break;
      default:
        console.log("não existe essa intenção")
  }


  if(intention === "click"){

    //const selector = iosDriver.$('~textField');
    //const resultClick = await iosDriver.$('~textField');
    //await resultClick.setValue("ronaldo");
    //const teste = 'type == "XCUIElementTypeButton" AND name == "getRandomButton"';
    //const teste = `type == "XCUIElementTypeButton" AND (name == "${possibility}" OR label == "${possibility}")`;
    //const oi = await iosDriver.$(`-ios predicate string:${teste}`);
    //await oi.click();
    //predicate = "name contains[c] '#{text}' || label contains[c] '#{text}' || value contains[c] '#{text}'"
    //element = execute_script(%Q(au.mainApp().getFirstWithPredicate("#{predicate}");))
    //const picker = iosDriver.$('~getRandomButton');
    //await iosDriver.touchScroll(178, 413, picker);
    //await iosDriver.touchAction([
      //  {action: 'press', x: 191, y: 332},
      //  {action: 'moveTo', x: 43, y: 332},
      //  'release'
    //]);

    const selector = `type == 'XCUIElementTypeSwitch' && name CONTAINS 'getRandomButton'`;
    const Switch = await iosDriver.$(`-ios predicate string:${selector}`);
    await Switch.click();

    //const selector = `type == 'XCUIElementTypeSwitch' && name CONTAINS 'Allow'`
    //const Switch = $(`-ios predicate string:${selector}`)
    //Switch.click()

  }

  //fecha o servidor
  //await server.close();

  const app = new Simulator();
  app.shutDownIosSimulator();

}

main();