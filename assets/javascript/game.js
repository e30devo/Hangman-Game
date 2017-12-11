
  document.addEventListener("DOMContentLoaded", function(event) {
    console.log("DOM fully loaded and parsed");

var subjectWords = ["BMW", "NISSAN", "CHEVROLET",
"PORSCHE", "VOLKSWAGEN", "HONDA", "FERARRI", "PEUGEOT", "TOYOTA", "AUDI",];
console.log(subjectWords);

// <-- if you cant tell what this does... -->
var numberOfGuesses = 10;
// console.log(numberOfGuesses);

// <-- or this... -->
var wincrementer = 1;

var wincrementerDiv = document.getElementsByClassName("wincrementer")[0];

function runGame () {

function reset () {
    wordInPlayDiv.textContent = "";
    numberOfGuesses = 10;
    runGame();                    
};  
    // <-- Randomly choose a string from array of subject words -->
    var wordInPlay = subjectWords[Math.floor(Math.random() * subjectWords.length)];
    console.log([...wordInPlay]);

    var wordInPlayDiv = document.getElementsByClassName("wordInPlay")[0];
    
    var letterSpan = document.getElementsByClassName("letters");

    var wrongGuessBinDiv = document.getElementsByClassName("wrongGuessBin")[0];
    
    
    // <-- Display "_ _ _ _ _ _" for wordInPlay -->
        for (var i = 0; i < wordInPlay.length; i++) {
            var span = document.createElement('span');
            span.classList.add("letters");
            span.textContent = "_";
            span.style = 'font-size: 150%; margin: 5px;';
            wordInPlayDiv.appendChild(span);
        };
        var wrongGuessBin = [];
        document.onkeyup = function(event) {
            var userGuess = String.fromCharCode(event.keyCode).toUpperCase();
            var numberOfGuessesDiv = document.getElementsByClassName("numberOfGuesses")[0];
            numberOfGuessesDiv.textContent = "Number of guesses remaining: " + numberOfGuesses;            
            
            console.log(wrongGuessBin);
            //Log user guess key to appropriate span
            for (var j = 0; j < wordInPlay.length; j++) {
                if (userGuess === wordInPlay[j]) {
                    letterSpan[j].textContent = userGuess;
                }
            };
                if (wordInPlay.indexOf(userGuess) < 0) {
                    wrongGuessBin.push(userGuess); 
                    wrongGuessBinDiv.innerHTML = wrongGuessBin;
                    numberOfGuesses--;
                    console.log(numberOfGuesses);
                };

                if (wordInPlayDiv.textContent === wordInPlay) {
                    wincrementerDiv.textContent = ("Wins: " + wincrementer ++ + "!");
                    wrongGuessBinDiv.textContent = "";
                    console.log(wincrementerDiv.textContent);        
                    document.onkeyup = function(event) {
                      reset();
                    };                            
                };

                if (numberOfGuesses === -1) {
                    wrongGuessBinDiv.textContent = "";
                reset();
                };               
        }; //closer for onkeyup\
    }; //closer for function dec
runGame();
}); //closer for DOM loaded listener






/*
https://developer.mozilla.org/en-US/docs/Web/API/Element/innerHTML
https://stackoverflow.com/questions/40858456/how-to-display-a-javascript-var-in-html-body
https://stackoverflow.com/questions/4547609/how-do-you-get-a-string-to-a-character-array-in-javascript

*/