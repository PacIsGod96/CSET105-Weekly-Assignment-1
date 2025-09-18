const prompt = require('prompt-sync')()


console.log(`Press 1 to play Max Score`);
console.log(`Press 2 to play Three-Out`);
let option = Number(prompt(`Enter option: `))
let num1 = Math.floor(Math.random() * 11)
let num2 = Math.floor(Math.random() * 11)
let ans = 0;
let score = 0; 
let counter = 20;
do{
    if(isNaN(option) || option > 2 ){
        console.log(`Invalid Answer`);
        option = Number(prompt(`Enter option: `));
    }else if(option == 1){
        maxScore();
        break;
    }else{
        threeOut();
        break;
    }
}while(true)
function randomOp(){
    let symbols = [`+`, `-`, `*`, `/`]
    let pickRandom = Math.floor(Math.random() * symbols.length);
    return symbols[pickRandom];
}   

function maxScore(){
    for(let i = 1; i <= counter; i++){
        num1 = Math.floor(Math.random() * 11)
        num2 = Math.floor(Math.random() * 11)
        let pickedOp = randomOp();
        if(pickedOp == `+`){
            console.log(`${num1} + ${num2} = `);
            ans = Number(prompt(`Enter Answer: `))
            if(isNaN(ans)){
                score = score - 0;
                counter = counter + 1;
                console.log(`Okay, Your score: ${score}`);
            }else if(ans == (num1 + num2) ){
                score = score + 10;
                console.log(`Correct! your score: ${score}`)
            }else if(ans !== (num1 + num2))
            {
                score = score - 5;
                console.log(`Wrong! your score: ${score}`)
            }
        }else if(pickedOp == `-`){
            if((num1 - num2) < 0){
                counter = counter + 1;
            }else if((num1 - num2) >= 0){
                console.log(`${num1} - ${num2} = `);
                ans = Number(prompt(`Enter Answer: `))
                if(isNaN(ans)){
                    score = score - 0;
                    counter = counter + 1;
                    console.log(`Okay, Your score: ${score}`);
                }else if(ans == (num1 - num2) ){
                    score = score + 10;
                    console.log(`Correct! your score: ${score}`)
                }else if(ans !== (num1 - num2))
                {
                    score = score - 5;
                    console.log(`Wrong! your score: ${score}`)
                }
            }
        }else if(pickedOp == `*`){
            console.log(`${num1} * ${num2} = `);
            ans = Number(prompt(`Enter Answer: `))
            if(isNaN(ans)){
                score = score - 0;
                counter = counter + 1;
                console.log(`Okay, Your score: ${score}`);
            }else if(ans == (num1 * num2) ){
                score = score + 10;
                console.log(`Correct! your score: ${score}`)
            }else if(ans !== (num1 * num2))
            {
                score = score - 5;
                console.log(`Wrong! your score: ${score}`)
            }
        }else if(pickedOp == `/`){
            if((num1 / num2 == undefined) || ((num1 / num2) % 2 !== 0) || ((num1 / num2) % 3 !== 0)){
                counter = counter +1;
            }else if((num1 / num2 !== undefined) && (((num1 / num2) % 2 == 0) || ((num1 / num2) % 3 == 0))){
                console.log(`${num1} / ${num2} = `);
                ans = Number(prompt(`Enter Answer: `))
                if(isNaN(ans)){
                    score = score - 0;
                    counter = counter + 1;
                    console.log(`Okay, Your score: ${score}`);
                }else if(ans == (num1 / num2) ){
                    score = score + 10;
                    console.log(`Correct! your score: ${score}`)
                }else if(ans !== (num1 / num2))
                {
                    score = score - 5;
                    console.log(`Wrong! your score: ${score}`)
                }
            }
        }
    }
}

function threeOut(){

   
}