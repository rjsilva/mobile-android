import {Intentions } from './intentions';

export class Action{

    public intentions:Intentions 
    public xpath:String

    constructor(xpath:String, intentions:Intentions){
        this.xpath = xpath;
        this.intentions = intentions;
    }


    doAction(){
        this.intentions.doAction(this.xpath);
    }

}