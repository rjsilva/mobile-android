#!/usr/bin/env node
const child_process = require('child_process');

class Simulator{


    shutDownAndroidSimulator(){
        child_process.exec("adb -s emulator-5554 emu kill", (error, stdout, stderr) => {
            console.log("fechando o Android Simulator");
        });
    }

    shutDownIosSimulator(){

    child_process.exec("killall iOS Simulator", (error, stdout, stderr) => {
        console.log("fechando o emulador iOS Simulator");
    });

    }

} 

module.exports = Simulator;

