"use strict";

function guessNumber() {

    let inputNumber = "1234";

    let answer = "1234";

    let inputNumberArray = inputNumber.split(""),answerArray = answer.split("");

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

guessNumber();


