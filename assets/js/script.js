const eurFlags = ["Andorra", "Austria", "Belgium", "Bulgaria", "Croatia", "Denmark", "Estonia", "Finland", "France", "Germany", "Greece", "Hungary", "Iceland" , "Ireland", "Italy",
    "Kosovo", "Latvia", "Lithuania", "Netherlands", "Norway", "Poland", "Portugal", "Russia", "Scotland", "Serbia" , "Slovakia", "Slovenia" , "Spain", "Sweden", "Wales"];

const ameFlags = ["America", "Argentina", "Bahamas", "Bolivia", "Brazil", "Canada", "Chile", "Colombia", "Cuba", "Dominican Republic", "Ecuador", "Greenland", "Grenada", "Guatemala", 
   "Guyana", "Haiti", "Honduras", "Jamaica", "Mexico", "Panama", "Peru", "Puerto Rico", "Saint Lucia", "Suriname", "Trinidad and Tobago", "Uruguay", "Venezuela"];

const meaFlags = ["Algeria", "Azerbaijan", "Bahrain", "Egypt", "Eritrea", "Ethiopia", "Ghana", "Iran", "Iraq", "Jordan", "Kenya", "Kuwait", "Lebanon",
   "Lesotho", "Malawi", "Morocco", "Namibia", "Nigeria", "Oman", "Palestine", "Qatar", "Rwanda", "Saudi Arabia", "South Africa", "Sudan", "Swaziland", "Syria", "Tajikistan", "Togo",
   "Tunisia", "Turkey", "Uganda", "United Arab Emirates", "Uzbekistan", "Yemen", "Zambia", "Zimbabwe"];

const seaFlags = ["Australia", "Bhutan", "Brunei", "China", "East Timor", "Fiji", "india", "Indonesia", "Japan", "korea", "Macau", "Malaysia", "Maldives", "Mongolia", "New Zealand",
   "North Korea", "Pakistan", "Papua New Guinea", "Philippines", "Samoa", "Singapore", "Solomon Islands", "Sri Lanka", "Taiwan", "Thailand", "Vietnam"];

const scores = [{userName: "Sarah", score: 10}, {userName: "John", score: 14}, {userName: "Jack", score: 8}, {userName: "Laura", score: 16}];

let array = [];
let score = 0;
let flagCount = 0;
let username = "";
let roundNum = 0;
let questNum = 0;

let usernameForm = document.getElementById('usernameInput');
usernameForm.addEventListener('submit', validateName);

//validate username
function validateName(event) {
    event.preventDefault();
    username = usernameInput.elements['username'].value;
    renderGamePage();
}


//load game function called from the start button on index page replace game-box html code
function renderGamePage() {
   let gameBox = document.getElementById('game-box');
   gameBox.innerHTML = ` <div class= "game-title">
           <h1>FLAGS</h1>
       </div>
       <div class = "round">
           <span id="round-name"><h4>Round ${(roundNum)}</h4></span>
       </div>
       <div class = "flag-score">
           <span id = "flag-num"><h4>Flag ${(flagCount)} of 20</h4></span>
           <span id = "score"><h4>Score: 0</h4></span>
       </div>
       <div id = "flag-container" class = "flag-image-container">
           <img class="flag-image" id = "flag" src="assets/images/ireland.png">
       </div>
       <div class = "flag-answers">
           <button class = "answer-button" onclick = "checkAnswer(event)" id ="answer1"><h3>Country1</h3></button>
           <button class = "answer-button" onclick = "checkAnswer(event)" id = "answer2"><h3>Country 2</h3></button>
           <button class = "answer-button" onclick = "checkAnswer(event)" id = "answer3"><h3>Country 3</h3></button>
           <button class = "answer-button" onclick = "checkAnswer(event)" id = "answer4"><h3>Country 4</h3></button>
       </div>
       <div class = "quit-control">
           <button class = "quit-button" onclick = "location.href = 'index.html'">Quit</button>
       </div>`;

    newRound();
}

//Function to select round and array to use
function newRound() {
    roundNum = roundNum +1;
    questNum = 0;

    if(roundNum === 1){
        array = eurFlags.slice();
    }
    else if(roundNum === 2){
        array = ameFlags.slice();
    }
    else if(roundNum === 3){
        array = meaFlags.slice();
    }
    else if(roundNum === 4){
        array = seaFlags.slice();
    }
    else{
        gameOver();
    }
    
    shuffleArray();
}

/*
Function to shuffle array and pass it to the loadQuest function
I used a Fisher-Yates Sorting Algorithm to shuffle array for round 1, I found the code snippet that I based mine on at the following link
https://www.freecodecamp.org/news/how-to-shuffle-an-array-of-items-using-javascript-or-typescript
*/
function shuffleArray() {
   for (let i = array.length -1; i > 0; i --){
       let countryIndex = Math.floor(Math.random()*(i+1));
       [array[i], array[countryIndex]] = [array[countryIndex], array[i]];
   }

   loadQuest();
}


//Function to create a new array called shortArray for each flag question with 4 items
function loadQuest() {
    let shortArray = array.slice(0, 4);

    //apply shortArray indexes to the buttons innertext
    let country1 = document.getElementById('answer1');
    country1.innerText = shortArray[0];
    let country2 = document.getElementById('answer2');
    country2.innerText = shortArray[1];
    let country3 = document.getElementById('answer3');
    country3.innerText = shortArray[2];
    let country4 = document.getElementById('answer4');
    country4.innerText = shortArray[3];

    //pick a random index from shortArray for the displayed flag, I found the code snippet the following link
    //https://stackoverflow.com/questions/5915096/get-a-random-item-from-a-javascript-array
    //change the string toLowerCase to match image filename
    let flagIndex = (shortArray[Math.floor(Math.random()*shortArray.length)].toLowerCase());
   
    //remove any spaces from string to match filename as detailed in the code at the link below
    //https://stackoverflow.com/questions/10800355/remove-whitespaces-inside-a-string-in-javascript
    flagIndex = flagIndex.replace(/\s/g, '');

    //apply flag image by setting the img src attribute to use variable flagIndex within the filename
    let flagDisplay = document.getElementById('flag');
    flagDisplay.src="assets/images/"+(flagIndex)+".png";

    //set the img alt attribute to the flagIndex value so that this can be used later in the checkAnswer function
    flagDisplay.alt=(flagIndex);
  
    //set flag counter
    flagCount = flagCount + 1;
    document.getElementById('flag-num').innerHTML = `<h4>Flag ${(flagCount)} of 20</h4>`;

    document.getElementById('round-name').innerHTML = `<h4>Round: ${(roundNum)}</h4>`;

    //set question counter
    questNum = questNum +1;

}


//Function to check users answer
function checkAnswer(event) {
    //Take the users answer from the DOM button object, transform to lowercase and remove any spaces
    let flagToRemove = (event.target.innerText);
    let myAnswer = (event.target.innerText).toLowerCase();
    myAnswer = myAnswer.replace(/\s/g, "");

    /*
    Compare this to the alt/id attribute on the flag image
    If they match set the button background to green and call the increase score function
    Otherwise change the background to red
    */
    let correctAnswer = document.getElementById('flag').alt;
    console.log(correctAnswer);
    console.log(myAnswer);
    console.log(flagToRemove);
    console.log(array);
    let myAnswerBtn = event.target;
    if (myAnswer === correctAnswer) {
        myAnswerBtn.style.backgroundColor = "green";
        increaseScore();
        removeFlag(flagToRemove);
    } else {
       myAnswerBtn.style.backgroundColor = "red";
    }

   //set timeout before resetting button backgrounds
   setTimeout(clearAnswers, 1000);

}

// Increase score
function increaseScore() {
   score = score + 1;
   document.getElementById('score').innerHTML = `<h4>Score:${(score)}</h4>`;
}

//Function to clear answer buttons and load another flag 
function clearAnswers() {
   //reset button background colour to white
   //the elements are returned as an array so a for let is used to reset the background style.

   let buttons = document.getElementsByClassName("answer-button");
   for (let button of buttons) {
       button.style.backgroundColor = "white";
    }

    loadAnotherQ();
}

/* 
Function to remove used flag from the array if guessed correctly in order to eliminate repetition
Flag to removed is passed from the check answer event. it is the inner text of the button clicked by the user. I used this because it is in the same form as the 
countries in the array, first letters Uppercase with spaces. 
*/
function removeFlag(flagToRemove) {
    
    //Find the index of FlagToRemove country in array
    //I used the following resource to help write this code https://sentry.io/answers/remove-specific-item-from-array/
  
    let usedFlag = array.indexOf(flagToRemove);
    if (usedFlag > -1) {
        array.splice(usedFlag, 1);
    }
}

//load the next question.
//If flagcount is less than 5 load another question otherwise choose another round
function loadAnotherQ() {
    if (roundNum > 4 && questNum > 5) {
        gameOver();
    }
    else if (roundNum <=4 && questNum < 5) {
        shuffleArray();
    }
    else if (roundNum <= 4 && questNum >= 5) {
        newRound();
    }
    else {
        gameOver();
    }
}



// Game over function to display final score and reset score and flagcount to 0.
function gameOver(){
    //push username and score to scores array
   scores.push({userName: (username), score: (score)});
   
   //sort scores array in descending order of score as described at the following link https://www.w3schools.com/jsref/jsref_sort.asp
   scores.sort(function(a, b){return b.score-a.score;});

    //Change innerhtml to display message and score. Set Play Again button to call the renderGamePage function.
  let gameBox = document.getElementById('game-box');
  gameBox.innerHTML = `
    <div class= "game-title"> 
        <h1>Game Over</h1>
    </div>

    <div class = "score-board-container">
        <h2>Well done</h2>
        <h2>${username}!</h2>
        <h2>You scored ${score}</h2>
        <table id = "s-table" class = "scores-table">
            <tbody>
                <th>Username</th>
                <th>Score</th>
                <tr>
                  <td>test</td>
                  <td>test</td>
                </tr>
                <tr>
                  <td>test</td>
                  <td>test</td>
                </tr>
                <tr>
                  <td>test</td>
                  <td>test</td>
                </tr>
                <tr>
                  <td>test</td>
                  <td>test</td>
                </tr>
                <tr>
                  <td>test</td>
                  <td>test</td>
                </tr>
            </tbody>
        </table>
    </div>

    <div class = "play-control">
        <button class = "play-button" onclick = "renderGamePage()">Play Again</button>
    </div>`;

    
    // Populate scores table with top 5 scores from scores array using do while loop
    let i = 0;
    do {
        let x = document.getElementById("s-table").rows[(i+1)].cells[0];
        x.innerText = (scores[i].userName);
        let y = document.getElementById("s-table").rows[(i+1)].cells[1];
        y.innerText = (scores[i].score); 
        i++;
        }
    while (i<=4);
        
    //reset score and flagcount variables
    score = 0; 
    flagCount = 0;
    roundNum = 0;
    questNum = 0;

}

