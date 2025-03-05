let randomNumber = parseInt(Math.random()*100 + 1)

const form = document.querySelector('.form')
const userInput = document.querySelector('#guessFeild')
const submitButton = document.querySelector('#submitbtn')
const guessSlot = document.querySelector('.guesses')
const remaining = document.querySelector('.lastresult')
const lowOrHigh = document.querySelector('.lowOrHigh')
const resultDiv = document.querySelector('.result')
const p = document.createElement('p')


let previousGuess = []
let numberOfguess = 1

let playGame = true


if(playGame){

    submitButton.addEventListener('click',function(e){

        e.preventDefault();
        const guess = parseInt(userInput.value);
        
        validateGuess(guess)
        
    })
}

function validateGuess (guess){

    if (isNaN(guess)){
        alert('Please Enter a Valid Number')
        userInput.value = '';

    }
    else if (guess < 1 || guess > 100){
        alert('Please Enter a Number between 1 to 100')
        userInput.value = '';

    }
    else{

        previousGuess.push(guess);
        if (numberOfguess === 10)
        {
            displayGuess(guess);
            displayMessage(`...GAME OVER... Random Number was ${randomNumber}`);
            endgame();
        }
        else{

            displayGuess(guess);
            checkGuesses(guess)
        }
    }
}

function checkGuesses (guess){

    if(guess === randomNumber)
    {
        displayMessage (`YOU WIN...You guessed it right`)
        endgame ();

    }
    else if(guess < randomNumber)
    {
        displayMessage (`Number is less than that`)
    }
    if(guess > randomNumber)
    {
        displayMessage (`Number is greater than that`)
    }
}

function displayGuess (guess){

    userInput.value = '';
    guessSlot.innerHTML += `${guess}  `
    numberOfguess++;
    remaining.innerHTML = `${11-numberOfguess}`;


}

function displayMessage (message){
 
    lowOrHigh.innerHTML = `<h2>${message}</h2>`
}

function endgame ()
{
    userInput.value = '';
    userInput.setAttribute('disabled','');
    p.classList.add('button')
    p.innerHTML = `<h2 id = 'newGame'> Start a New Game</h2>`;
    resultDiv.appendChild(p)
    playGame = false;
    newgame();

}

function newgame ()
{
    const newgamebtn = document.querySelector('#newGame');
    newgamebtn.addEventListener('click',function(e){

        randomNumber = parseInt(Math.random()*100 + 1);
        previousGuess = [];
        numberOfguess = 1;
        guessSlot.innerHTML = '';
        remaining.innerHTML = `${11-numberOfguess}`;
        userInput.removeAttribute('disabled');
        playGame = true;
        resultDiv.removeChild(p)
        lowOrHigh.innerHTML=''



    })

}

