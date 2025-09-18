const prompt = require('prompt-sync')()


console.log(`Press 1 to play Max Score`);
console.log(`Press 2 to play Three-Out`);
let option = Number(prompt(`Enter option: `))
let optionTwo = Number(prompt(`Enter difficulty option: `))
let num1 = Math.floor(Math.random() * 11)
let num2 = Math.floor(Math.random() * 11)
let ans = 0;
let score = 0; 
let counter = 20;
let symbols = []
let pickRandom = Math.floor(Math.random() * symbols.length);
do{
    if(isNaN(option) || option > 2 ){
        console.log(`Invalid Answer`);
        option = Number(prompt(`Enter option: `));
    }else if(option == 1){
        console.log(`Enter "1" for Easy`);
        console.log(`Enter "2" for Medium`);
        console.log(`Enter "3" for Hard`);
        optionTwo = Number(prompt(`Enter difficulty option: `))
        if((isNaN(optionTwo)) || (optionTwo > 3)){
            console.log(`Invalid Answer`)
            optionTwo = Number(prompt(`Enter difficulty option: `))
        }else if(optionTwo == 1){
            easy();
        }else if(optionTwo == 2){

        }else if(optionTwo == 3){

        }
        maxScore();
        break;
    }else{
        threeOut();
        break;
    }
}while(true)

function easy(){
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
        }
    }
}
function medium(){
    
}
function randomOp(){
    if(optionTwo == 1){
        symbols = [`+`, `-`]
    }else if((optionTwo == 2) || (optionTwo == 3)){
        symbols = [`+`, `-`, `*`,`/`]
    }
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