const prompt = require('prompt-sync')()


console.log(`Press 1 to play Max Score`);
console.log(`Press 2 to play Three-Out`);
let option = Number(prompt(`Enter option: `))
let num1 = Math.floor(Math.random() * 11)
let num2 = Math.floor(Math.random() * 11)
let ans = 0;
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
    
    let score = 0; 
    for(let i = 1; i <= 20; i++){
        num1 = Math.floor(Math.random() * 11)
        num2 = Math.floor(Math.random() * 11)
        let pickedOp = randomOp();
        if(pickedOp == `+`){
            console.log(`${num1} + ${num2} = `);
            ans = Number(prompt(`Enter Answer: `))
        }else if(pickedOp == `-`){
            console.log(`${num1} - ${num2} = `);
            ans = Number(prompt(`Enter Answer: `))
        }else if(pickedOp == `*`){
            console.log(`${num1} * ${num2} = `);
            ans = Number(prompt(`Enter Answer: `))
        }else if(pickedOp == `/`){
            console.log(`${num1} / ${num2} = `);
            ans = Number(prompt(`Enter Answer: `))
        }
        // console.log(`${num1} + ${num2} = `)
        // let ans = Number(prompt(`Enter Answer: `)) 
        // if(isNaN(ans)){
        //     score = score - 0;
        //     console.log(`Okay, Your score: ${score}`);
        // }else if(ans == (num1 + num2) ){
        //     score = score + 10;
        //     console.log(`Correct! your score: ${score}`)
            
        // }else if(ans !== (num1 + num2))
        // {
        //     score = score - 5;
        //     console.log(`Wrong! your score: ${score}`)
        // }
    }
}

function threeOut(){

    let num1 = Math.floor(Math.random() * 11)
    let num2 = Math.floor(Math.random() * 11)
    let score = 0; 
    let lives = 3;
    for(let j = 1; j <= 5; j++){
        num1 = Math.floor(Math.random() * 11)
        num2 = Math.floor(Math.random() * 11)
        console.log(`${num1} + ${num2} = `)
        let ans = Number(prompt(`Enter Answer: `)) 
        if(isNaN(ans)){
            score = score - 0;
            console.log(`Okay, Your score: ${score}, Lives left: ${lives}`);
        }else if(ans == (num1 + num2) ){
            score = score + 10;
            console.log(`Correct! your score: ${score}, Lives left: ${lives}`)
            
        }else if(ans !== (num1 + num2))
        {
            lives = lives - 1;
            console.log(`Wrong! your score: ${score}, Lives left: ${lives}`)
            if(lives == 0){
                console.log(`${score}`)
                return;
            }
        }
    }
    for(x = 1; x <= 5; x++){
        num1 = Math.floor(Math.random() * 11)
        num2 = Math.floor(Math.random() * 11)
        console.log(`${num1} * ${num2} = `)
        let ans = Number(prompt(`Enter Answer: `)) 
        if(isNaN(ans)){
            score = score - 0;
            console.log(`Okay, Your score: ${score}`);
        }else if(ans == (num1 * num2) ){
            score = score + 10;
            console.log(`Correct! your score: ${score}`)
            
        }else if(ans !== (num1 * num2))
        {
            lives = lives - 1;
            console.log(`Wrong! your score: ${score}`)
            if(lives == 0){
                console.log(`${score}`)
                return;
            }
        }
    }
    

}