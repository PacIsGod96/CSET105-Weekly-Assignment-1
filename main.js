const prompt = require('prompt-sync')()


console.log(`Press 1 to play Max Score`);
console.log(`Press 2 to play Three-Out`);
let option = Number(prompt(`Enter option: `))
console.log(`Enter "1" for Easy`);
console.log(`Enter "2" for Medium`);
console.log(`Enter "3" for Hard`);
let optionTwo = Number(prompt(`Enter difficulty option: `))
let num1 = Math.floor(Math.random() * 11)
let num2 = Math.floor(Math.random() * 11)
let ans = 0;
let score = 0; 
let counter = 20;
let lives = 3;
let symbol = Math.floor(Math.random()*2)
do{
    if(isNaN(option) || option > 2 ){
        console.log(`Invalid Answer`);
        option = Number(prompt(`Enter option: `));
    }
    if((isNaN(optionTwo)) || (optionTwo > 3)){
            console.log(`Invalid Answer`)
            optionTwo = Number(prompt(`Enter difficulty option: `))
    }else if(option == 1 && optionTwo == 1){
        easy();
        break;
    }else if(option == 1 && optionTwo == 2){
        medium();  
        break; 
    }else if(option == 1 && optionTwo == 3){
        hard();
        break;
    }else if(option == 2 && optionTwo == 1){
        easyThreeOut();
        break;
    }else if(option == 2 && optionTwo == 2){
        mediumThreeOut();  
        break; 
    }else if(option == 2 && optionTwo == 3){
        hardThreeOut();
        break;
    }
}while(true)

function easy(){
    for(let i = 1; i <= counter; i++){
        symbol = Math.floor(Math.random()*10)
        num1 = Math.floor(Math.random() * 10)
        num2 = Math.floor(Math.random() * 10)
        if((symbol == 0) || (symbol == 1) || (symbol == 2) || (symbol == 5) || (symbol == 6) || (symbol == 7) || (symbol == 8) || (symbol == 9)){
            counter = counter + 1
        }else if(symbol == 3){
            console.log(`${num1} + ${num2} = `);
            ans = Number(prompt(`Enter Answer: `))
            if(isNaN(ans)){
                score = score - 0;
                counter = counter + 1;
                console.log(`Okay, Your score: ${score}`);
            }else if(ans == (num1 + num2) ){
                score = score + 10;
                console.log(`Correct! your score: ${score}`)
            }else if(ans !== (num1 + num2)){
                 if(score == 0){
                    score = 0;
                }else{
                    score = score - 5;
                }
                console.log(`Wrong! your score: ${score}`)
            }
        }else if(symbol == 4){
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
                }else if(ans !== (num1 - num2)){
                    if(score == 0){
                        score = 0;
                    }else{
                        score = score - 5;
                    }
                    console.log(`Wrong! your score: ${score}`)
                }
           }
        }
    }
}
function medium(){
    for(let i = 1; i <= counter; i++){
        symbol = Math.floor(Math.random()*10)
        if((symbol == 0) || (symbol == 1) || (symbol == 2)|| (symbol == 8) || (symbol == 9)){
            counter = counter + 1
        }else if(symbol == 3){
            num1 = Math.floor(Math.random() * 100)
            num2 = Math.floor(Math.random() * 100)
            console.log(`${num1} + ${num2} = `);
            ans = Number(prompt(`Enter Answer: `))
            if(isNaN(ans)){
                score = score - 0;
                counter = counter + 1;
                console.log(`Okay, Your score: ${score}`);
            }else if(ans == (num1 + num2) ){
                score = score + 10;
                console.log(`Correct! your score: ${score}`)
            }else if(ans !== (num1 + num2)){
                if(score == 0){
                    score = 0;
                }else{
                    score = score - 5;
                }
                console.log(`Wrong! your score: ${score}`)
            }
        }else if(symbol == 4){
            num1 = Math.floor(Math.random() * 100)
            num2 = Math.floor(Math.random() * 100)
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
                }else if(ans !== (num1 - num2)){
                    if(score == 0){
                        score = 0;
                    }else{
                        score = score - 5;
                    }
                    console.log(`Wrong! your score: ${score}`)
                }
           }
        }else if(symbol == 5){
            num1 = Math.floor(Math.random() * 10)
            num2 = Math.floor(Math.random() * 10)
            console.log(`${num1} * ${num2} = `);
            ans = Number(prompt(`Enter Answer: `))
            if(isNaN(ans)){
                score = score - 0;
                counter = counter + 1;
                console.log(`Okay, Your score: ${score}`);
            }else if(ans == (num1 * num2) ){
                score = score + 10;
                console.log(`Correct! your score: ${score}`)
            }else if(ans !== (num1 * num2)){
                score = score - 5;
                console.log(`Wrong! your score: ${score}`)
            }
        }else if(symbol == 6){
            num1 = Math.floor(Math.random() * 10)
            num2 = Math.floor(Math.random() * 10)
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
                }else if(ans !== (num1 / num2)){
                    if(score == 0){
                        score = 0;
                    }else{
                        score = score - 5;
                    }
                    console.log(`Wrong! your score: ${score}`)
                }
            }
        }else if(symbol == 7){
            num1 = Math.floor(Math.random() * 10)
            num2 = Math.floor(Math.random() * 10)
            console.log(`${num1} % ${num2} = `);
            ans = Number(prompt(`Enter Answer: `))
            if(isNaN(ans)){
                score = score - 0;
                counter = counter + 1;
                console.log(`Okay, Your score: ${score}`);
            }else if(ans == (num1 % num2) ){
                score = score + 10;
                console.log(`Correct! your score: ${score}`)
            }else if(ans !== (num1 % num2)){
                if(score == 0){
                    score = 0;
                }else{
                    score = score - 5;
                }
                console.log(`Wrong! your score: ${score}`)
            }
        }
    }
}

function hard(){
    for(let i = 1; i <= counter; i++){
        symbol = Math.floor(Math.random()*10)
        if((symbol == 0) || (symbol == 1) || (symbol == 2)|| (symbol == 8) || (symbol == 9)){
            counter = counter + 1
        }else if(symbol == 3){
            num1 = Math.floor(Math.random() * 1000)
            num2 = Math.floor(Math.random() * 1000)
            console.log(`${num1} + ${num2} = `);
            ans = Number(prompt(`Enter Answer: `))
            if(isNaN(ans)){
                score = score - 0;
                counter = counter + 1;
                console.log(`Okay, Your score: ${score}`);
            }else if(ans == (num1 + num2) ){
                score = score + 10;
                console.log(`Correct! your score: ${score}`)
            }else if(ans !== (num1 + num2)){
                if(score == 0){
                    score = 0;
                }else{
                    score = score - 5;
                }
                console.log(`Wrong! your score: ${score}`)
            }
        }else if(symbol == 4){
            num1 = Math.floor(Math.random() * 1000)
            num2 = Math.floor(Math.random() * 1000)
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
                }else if(ans !== (num1 - num2)){
                    if(score == 0){
                        score = 0;
                    }else{
                        score = score - 5;
                    }
                    console.log(`Wrong! your score: ${score}`)
                }
           }
        }else if(symbol == 5){
            num1 = Math.floor(Math.random() * 100)
            num2 = Math.floor(Math.random() * 100)
            console.log(`${num1} * ${num2} = `);
            ans = Number(prompt(`Enter Answer: `))
            if(isNaN(ans)){
                score = score - 0;
                counter = counter + 1;
                console.log(`Okay, Your score: ${score}`);
            }else if(ans == (num1 * num2) ){
                score = score + 10;
                console.log(`Correct! your score: ${score}`)
            }else if(ans !== (num1 * num2)){
                score = score - 5;
                console.log(`Wrong! your score: ${score}`)
            }
        }else if(symbol == 6){
            num1 = Math.floor(Math.random() * 100)
            num2 = Math.floor(Math.random() * 100)
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
                }else if(ans !== (num1 / num2)){
                    if(score == 0){
                        score = 0;
                    }else{
                        score = score - 5;
                    }
                    console.log(`Wrong! your score: ${score}`)
                }
            }
        }else if(symbol == 7){
            num1 = Math.floor(Math.random() * 100)
            num2 = Math.floor(Math.random() * 100)
            console.log(`${num1} % ${num2} = `);
            ans = Number(prompt(`Enter Answer: `))
            if(isNaN(ans)){
                score = score - 0;
                counter = counter + 1;
                console.log(`Okay, Your score: ${score}`);
            }else if(ans == (num1 % num2) ){
                score = score + 10;
                console.log(`Correct! your score: ${score}`)
            }else if(ans !== (num1 % num2)){
                if(score == 0){
                    score = 0;
                }else{
                    score = score - 5;
                }
                console.log(`Wrong! your score: ${score}`)
            }
        }
    }
}

function easyThreeOut(){
    for(let i = 1; i <= counter; i++){
        symbol = Math.floor(Math.random()*10)
        num1 = Math.floor(Math.random() * 10)
        num2 = Math.floor(Math.random() * 10)
        if((symbol == 0) || (symbol == 1) || (symbol == 2) || (symbol == 5) || (symbol == 6) || (symbol == 7) || (symbol == 8) || (symbol == 9)){
            counter = counter + 1
        }else if(symbol == 3){
            console.log(`${num1} + ${num2} = `);
            ans = Number(prompt(`Enter Answer: `))
            if(isNaN(ans)){
                score = score - 0;
                counter = counter + 1;
                console.log(`Okay, Your score: ${score}`);
            }else if(ans == (num1 + num2) ){
                score = score + 10;
                console.log(`Correct! your score: ${score}`)
            }else if(ans !== (num1 + num2)){
                lives = lives - 1
                if(lives == 0){
                    console.log(`Final score: ${score}`)
                    return;
                }else{
                    console.log(`Wrong! your score: ${score}`)
                    console.log(`Lives Remaining: ${lives}`)
                }
            }
        }else if(symbol == 4){
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
                }else if(ans !== (num1 - num2)){
                    lives = lives - 1
                    if(lives == 0){
                        console.log(`Final score: ${score}`)
                        return;
                    }else{
                        console.log(`Wrong! your score: ${score}`)
                        console.log(`Lives Remaining: ${lives}`)
                    }
                }
           }
        }
    }
}
function mediumThreeOut(){
    for(let i = 1; i <= counter; i++){
        symbol = Math.floor(Math.random()*10)
        if((symbol == 0) || (symbol == 1) || (symbol == 2)|| (symbol == 8) || (symbol == 9)){
            counter = counter + 1
        }else if(symbol == 3){
            num1 = Math.floor(Math.random() * 100)
            num2 = Math.floor(Math.random() * 100)
            console.log(`${num1} + ${num2} = `);
            ans = Number(prompt(`Enter Answer: `))
            if(isNaN(ans)){
                score = score - 0;
                counter = counter + 1;
                console.log(`Okay, Your score: ${score}`);
            }else if(ans == (num1 + num2) ){
                score = score + 10;
                console.log(`Correct! your score: ${score}`)
            }else if(ans !== (num1 + num2)){
                lives = lives - 1
                if(lives == 0){
                    console.log(`Final score: ${score}`)
                    return;
                }else{
                    console.log(`Wrong! your score: ${score}`)
                    console.log(`Lives Remaining: ${lives}`)
                }
            }
        }else if(symbol == 4){
            num1 = Math.floor(Math.random() * 100)
            num2 = Math.floor(Math.random() * 100)
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
                }else if(ans !== (num1 - num2)){
                    lives = lives - 1
                    if(lives == 0){
                        console.log(`Final score: ${score}`)
                        return;
                    }else{
                        console.log(`Wrong! your score: ${score}`)
                        console.log(`Lives Remaining: ${lives}`)
                    }
                }
           }
        }else if(symbol == 5){
            num1 = Math.floor(Math.random() * 10)
            num2 = Math.floor(Math.random() * 10)
            console.log(`${num1} * ${num2} = `);
            ans = Number(prompt(`Enter Answer: `))
            if(isNaN(ans)){
                score = score - 0;
                counter = counter + 1;
                console.log(`Okay, Your score: ${score}`);
            }else if(ans == (num1 * num2) ){
                score = score + 10;
                console.log(`Correct! your score: ${score}`)
            }else if(ans !== (num1 * num2)){
                lives = lives - 1
                if(lives == 0){
                    console.log(`Final score: ${score}`)
                    return;
                }else{
                    console.log(`Wrong! your score: ${score}`)
                    console.log(`Lives Remaining: ${lives}`)
                }
            }
        }else if(symbol == 6){
            num1 = Math.floor(Math.random() * 10)
            num2 = Math.floor(Math.random() * 10)
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
                }else if(ans !== (num1 / num2)){
                    lives = lives - 1
                    if(lives == 0){
                        console.log(`Final score: ${score}`)
                        return;
                    }else{
                        console.log(`Wrong! your score: ${score}`)
                        console.log(`Lives Remaining: ${lives}`)
                    }
                }
            }
        }else if(symbol == 7){
            num1 = Math.floor(Math.random() * 10)
            num2 = Math.floor(Math.random() * 10)
            console.log(`${num1} % ${num2} = `);
            ans = Number(prompt(`Enter Answer: `))
            if(isNaN(ans)){
                score = score - 0;
                counter = counter + 1;
                console.log(`Okay, Your score: ${score}`);
            }else if(ans == (num1 % num2) ){
                score = score + 10;
                console.log(`Correct! your score: ${score}`)
            }else if(ans !== (num1 % num2)){
                lives = lives - 1
                if(lives == 0){
                    console.log(`Final score: ${score}`)
                    return;
                }else{
                    console.log(`Wrong! your score: ${score}`)
                    console.log(`Lives Remaining: ${lives}`)
                }
            }
        }
    }
}

function hardThreeOut(){
    for(let i = 1; i <= counter; i++){
        symbol = Math.floor(Math.random()*10)
        if((symbol == 0) || (symbol == 1) || (symbol == 2)|| (symbol == 8) || (symbol == 9)){
            counter = counter + 1
        }else if(symbol == 3){
            num1 = Math.floor(Math.random() * 1000)
            num2 = Math.floor(Math.random() * 1000)
            console.log(`${num1} + ${num2} = `);
            ans = Number(prompt(`Enter Answer: `))
            if(isNaN(ans)){
                score = score - 0;
                counter = counter + 1;
                console.log(`Okay, Your score: ${score}`);
            }else if(ans == (num1 + num2) ){
                score = score + 10;
                console.log(`Correct! your score: ${score}`)
            }else if(ans !== (num1 + num2)){
                lives = lives - 1
                if(lives == 0){
                    console.log(`Final score: ${score}`)
                    return;
                }else{
                    console.log(`Wrong! your score: ${score}`)
                    console.log(`Lives Remaining: ${lives}`)
                }
            }
        }else if(symbol == 4){
            num1 = Math.floor(Math.random() * 1000)
            num2 = Math.floor(Math.random() * 1000)
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
                }else if(ans !== (num1 - num2)){
                    lives = lives - 1
                    if(lives == 0){
                        console.log(`Final score: ${score}`)
                        return;
                    }else{
                        console.log(`Wrong! your score: ${score}`)
                        console.log(`Lives Remaining: ${lives}`)
                    }
                }
           }
        }else if(symbol == 5){
            num1 = Math.floor(Math.random() * 100)
            num2 = Math.floor(Math.random() * 100)
            console.log(`${num1} * ${num2} = `);
            ans = Number(prompt(`Enter Answer: `))
            if(isNaN(ans)){
                score = score - 0;
                counter = counter + 1;
                console.log(`Okay, Your score: ${score}`);
            }else if(ans == (num1 * num2) ){
                score = score + 10;
                console.log(`Correct! your score: ${score}`)
            }else if(ans !== (num1 * num2)){
                score = score - 5;
                console.log(`Wrong! your score: ${score}`)
            }
        }else if(symbol == 6){
            num1 = Math.floor(Math.random() * 100)
            num2 = Math.floor(Math.random() * 100)
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
                }else if(ans !== (num1 / num2)){
                    lives = lives - 1
                    if(lives == 0){
                        console.log(`Final score: ${score}`)
                        return;
                    }else{
                        console.log(`Wrong! your score: ${score}`)
                        console.log(`Lives Remaining: ${lives}`)
                    }
                }
            }
        }else if(symbol == 7){
            num1 = Math.floor(Math.random() * 100)
            num2 = Math.floor(Math.random() * 100)
            console.log(`${num1} % ${num2} = `);
            ans = Number(prompt(`Enter Answer: `))
            if(isNaN(ans)){
                score = score - 0;
                counter = counter + 1;
                console.log(`Okay, Your score: ${score}`);
            }else if(ans == (num1 % num2) ){
                score = score + 10;
                console.log(`Correct! your score: ${score}`)
            }else if(ans !== (num1 % num2)){
                lives = lives - 1
                if(lives == 0){
                    console.log(`Final score: ${score}`)
                    return;
                }else{
                    console.log(`Wrong! your score: ${score}`)
                    console.log(`Lives Remaining: ${lives}`)
                }
            }
        }
    }
}