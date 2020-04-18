import { Intentions } from './intentions';


export class Click implements Intentions {
    doAction(xpath:String): boolean {
        console.log("clicando no botao " + xpath);
        return true;
    }
  }
  
  export class Fill implements Intentions {
    doAction(xpath:String): boolean {
        console.log("clicando na imagem " + xpath)
        return true;
    }
  }
  
  export class Scroll implements Intentions {
    doAction(xpath:String): boolean {
        console.log("clicando no link " + xpath)
        return true;
    }
  }