
  document.addEventListener("DOMContentLoaded", function(event) {
    console.log("DOM fully loaded and parsed");

var subjectWords = [ "BMW", "NISSAN", "CHEVROLET",];
// "PORSCHE", "VOLKSWAGEN", "HONDA", "FERARRI", "PEUGEOT", "TOYOTA", "AUDI",];
console.log(subjectWords);

// <-- if you cant tell what this does... -->
var numberOfGuesses = 5;
// console.log(numberOfGuesses);

// <-- or this... -->
var wincrementer = 0;
console.log(wincrementer);

var wincrementerDiv = document.getElementsByClassName("wincrementer")[0];
// <-- Randomly choose a string from array of subject words -->
var wordInPlay = subjectWords[Math.floor(Math.random() * subjectWords.length)];
// console.log(wordInPlay);

var wordInPlayDiv = document.getElementsByClassName("wordInPlay")[0];
// <-- Convert string to characters to display on key up -->

//RETURN TO ARRAY, COMPARE TO WORD IN PLAY
 
var letterSpan = document.getElementsByClassName("letters");


// <-- Display "_ _ _ _ _ _" for wordInPlay -->
    for (var i = 0; i < wordInPlay.length; i++) {
        var span = document.createElement('span');
        span.classList.add("letters");
        span.textContent = "_";
        span.style = 'font-size: 150%; margin: 5px;';
        wordInPlayDiv.appendChild(span);
    };
    
    document.onkeyup = function(event) {
        var userGuess = event.key;
        
          

        //Log user guess key to appropriate span
        for (var j = 0; j < wordInPlay.length; j++) {
  
            
            if (userGuess === wordInPlay[j]) {
                letterSpan[j].textContent = userGuess;
            } 
            if (wordInPlayDiv.textContent === wordInPlay) {
                wincrementerDiv.textContent = ("Wins " + wincrementer + 1);
            };
        } 
        console.log(wordInPlayDiv.textContent);
        // for (var h = 0; h < wordInPlay.length; h++)




        
        // if (userGuess !== "N", "I", "S", "A", "N") {
        //     numberOfGuesses = numberOfGuesses - 1;
        //     console.log(numberOfGuesses);
        // }
            // if (userGuess != letterSpan[i].inne) {
            //     numberOfGuesses = numberOfGuesses - 1;
            //     console.log(numberOfGuesses);    
            // if (numberOfGuesses -1);
            // }
        // else (letterSpan[i].textContent === "_") 
        //     // console.log("BANANAS");
        
      
    //DONT TOUCH FROM HERE UP, THIS ALL WORKS
        
        // if (userGuess !== hiddenWord[i]) {
        //     numberOfGuesses = numberOfGuesses - 1;
            // console.log(numberOfGuesses);    
        // if (numberOfGuesses -1);
        // }

        // if (numberOfGuesses === 0) {
        //     alert("YOU'VE BEEN PULLED OVER, PAY FINE TO CONTINUE!");
        // }
            //     console.log(numberOfGuesses);
            //     wordInPlay = subjectWords[Math.floor(Math.random() * subjectWords.length)];
            //     console.log(wordInPlay);
            // }
            
        
    }


    }); //closer for DOM loaded listener


// console.log(hiddenWord[0]);
// (userGuess === hiddenWord.indexOf[i])

// === hiddenWord.indexOf[i]



// <-- If all letters for word are displayed, show "YOU'VE REACHED TOP SPEED!" to user -->


// <-- if guesses = 0 show "YOU'VE BEEN PULLED OVER, PAY FINE TO CONTINUE!" to user -->






/*
https://developer.mozilla.org/en-US/docs/Web/API/Element/innerHTML
https://stackoverflow.com/questions/40858456/how-to-display-a-javascript-var-in-html-body
https://stackoverflow.com/questions/4547609/how-do-you-get-a-string-to-a-character-array-in-javascript

*/