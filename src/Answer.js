"use strict";
//随机产生答案

function randomGenerateAnswer() {
    let answerStr = "";

    const maxNum = 10;

    for (let i = 0; i < 4; i++) {
        answerStr += parseInt(Math.random()*(maxNum+1),10);
    }

    console.log(answerStr);
}

function aa(){
    console.log("11");
}


randomGenerateAnswer();

module.exports.aa = aa;