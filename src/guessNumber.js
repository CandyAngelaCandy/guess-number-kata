"use strict";

function consoleInput() {

    const readline = require('readline');

    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    var myInput;

    console.log("Please input the number:");

    rl.on('line', function (input) {

        // 下面就可以对数据进行处理......
        //console.log(input);

        //开始猜数字
        guessNumber(input);

        rl.close();
    });

    rl.on('close', function() {
        console.log('程序结束');
        process.exit(0);
    });

}

function guessNumber(input) {

   //let inputNumber = "1234";

   let answer = "1234";

   let  inputNumberArray = input.split(" ");
   let  answerArray = answer.split("");

   let aCount = 0,bCount = 0;

    for (let i = 0; i < inputNumberArray.length; i++) {

        let curElement = inputNumberArray[i];

        let index = answerArray.indexOf(curElement);

        if(index !=-1){

            if(index == i){
                aCount++;
            }else{
                bCount++;
            }

        }
    }

    console.log(`${aCount}A${bCount}B`);

}


consoleInput();



