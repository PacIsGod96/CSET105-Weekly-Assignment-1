const prompt = require('prompt-sync')()


console.log(`Press 1 to play Max Score`);
console.log(`Press 2 to play Three-Out`);
let option = Number(prompt(`Enter option: `))

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

function maxScore(){
    let num1 = 1
    let score = 0; 
    for(let num2 = 1; num1 <= 20; num1++){
        console.log(`${num1} + ${num2} = `)
        let ans = Number(prompt(`Enter Answer: `)) 
        if(isNaN(ans)){
            score = score - 0;
            console.log(`Okay, Your score: ${score}`);
        }else if(ans == (num1 + num2) ){
            score = score + 10;
            console.log(`Correct! your score: ${score}`)
            
        }else if(ans !== (num1 + num2))
        {
            score = score - 5;
            console.log(`Wrong! your score: ${score}`)
        }
    }
}

function threeOut(){
    let num1 = 1;
    let score = 0; 
    let lives = 3;
    for(let num2 = 1; num1 <= 5; num1++){
        console.log(`${num1} + ${num2} = `)
        let ans = Number(prompt(`Enter Answer: `)) 
        if(isNaN(ans)){
            score = score - 0;
            console.log(`Okay, Your score: ${score}`);
        }else if(ans == (num1 + num2) ){
            score = score + 10;
            console.log(`Correct! your score: ${score}`)
            
        }else if(ans !== (num1 + num2))
        {
            lives = lives - 1;
            console.log(`Wrong! Lives left: ${lives}`)
            if(lives == 0){
                console.log(`${score}`)
                return;
            }
        }
    }
    let num4 = 1
    for(let num3 = 1; num4 <= 5; num3++){
        console.log(`${num3} * ${num4} = `)
        let ans = Number(prompt(`Enter Answer: `)) 
        if(isNaN(ans)){
            score = score - 0;
            console.log(`Okay, Your score: ${score}`);
        }else if(ans == (num3 * num4) ){
            score = score + 10;
            console.log(`Correct! your score: ${score}`)
            
        }else if(ans !== (num3 * num4))
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