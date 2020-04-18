import { Action } from './action';
import { Click } from './click-strategy';
import { Fill } from './click-strategy';
import { Scroll } from './click-strategy';


let texto:String = "quando clico agencia";


let tuplas:[String, String, String];

tuplas = ["click", "fill", "doubleclick"];
var strategy;
tuplas.forEach(function(value){
    switch(value){
        case "click":{
            strategy = new Action("//android.widget.textview[@text='agencia']", new Click());
            break;
        }
        case "click":{
            strategy = new Action("//android.widget.textview[@text='agencia']", new Fill());
            break;
        }
        case "click":{
            strategy = new Action("//android.widget.textview[@text='agencia']", new Scroll());
            break;
        }
    }
    strategy.doAction(); 
});