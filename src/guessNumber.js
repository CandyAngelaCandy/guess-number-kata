"use strict";
//import Answer from "./Answer";


function consoleInput() {

    var scanf = require('scanf');

    // console.log('Pleas input your name');
    // var name = scanf('%s');

    console.log("The guess number game begins.You have 6 chances");

    //随机产生答案
    let answer = randomGenerateAnswer();
    console.log("answer: "+answer);

    //用户控制台输入数字
    const readline = require('readline')

    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    var lineCount = 6;// 获取行数

    var count = 1;

    rl.on('line', function (input) {

        //开始猜数字
        var flag = guessNumber(input,answer);

        count++;

        if(flag){
            rl.close();
            process.exit(0);
        }

        if(count == lineCount + 1){ // 获取了此轮所有数据，此时获取元素 nLine+1 个，第一个元素为行数nLine.

            if(!flag){
                console.log('6次机会用完，游戏结束,');
                rl.close();
                process.exit(0);
            }

        }

    });
}

//检查用户的输入是否合法，并且不能有重复数字
function guessNumber(input,answer) {

   //let inputNumber = "1234";
    //let answer = "1234";

   console.log("answer: " + answer);

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

    let result = `${aCount}A${bCount}B`;

    let flag = false;

    if(result == "4A0B"){
        console.log("You success");
        flag = true;
    }

    console.log(`The guess result: ${aCount}A${bCount}B`);

    return flag;

}

//生成的随机数不能有重复数字
function randomGenerateAnswer() {
    let answerStr = "";

    const maxNum = 10;

    for (let i = 0; i < 4; i++) {

        let randomGenerateDig = parseInt(Math.random()*(maxNum+1),10);

        //消除产生的重复的数字

        // if(){
        //
        // }

        answerStr += parseInt(Math.random()*(maxNum+1),10);

    }

    return answerStr;

    //console.log(answerStr);
}

consoleInput();



