const eur = ["Andorra", "Austria", "Belgium", "Bulgaria", "Croatia", "Denmark", "Estonia", "Finland", "France", "Germany", "Greece", "Hungary", "Iceland" , "Ireland", "Italy",
    "Kosovo", "Latvia", "Lithuania", "Netherlands", "Norway", "Poland", "Portugal", "Russia", "Scotland", "Serbia" , "Slovakia", "Slovenia" , "Spain", "Sweden", "Wales"];

const ame = ["America", "Argentina", "Bahamas", "Bolivia", "Brazil", "Canada", "Chile", "Colombia", "Cuba", "Dominican Republic", "Ecuador", "Greenland", "Grenada", "Guatemala", 
   "Guyana", "Haiti", "Honduras", "Jamaica", "Mexico", "Panama", "Peru", "Puerto Rico", "Saint Lucia", "Suriname", "Trinidad and Tobago", "Uruguay", "Venezuela"];

const mea = ["Algeria", "Azerbaijan", "Bahrain", "Democratic Republic of Congo", "Egypt", "Eritrea", "Ethiopia", "Ghana", "Iran", "Iraq", "Jordan", "Kenya", "Kuwait", "Lebanon",
   "Lesotho", "Malawi", "Morocco", "Namibia", "Nigeria", "Oman", "Palestine", "Qatar", "Rwanda", "Saudi Arabia", "South Afria", "Sudan", "Swaziland", "Syria", "Tajikistan", "Togo",
   "Tunisia", "Turkey", "Uganda", "United Arab Emirates", "Uzbekistan", "Yemen", "Zambia", "Zimbabwe"];

const sea = ["Australia", "Bhutan", "Brunei", "China", "East Timor", "Fiji", "india", "Indonesia", "Japan", "korea", "Macau", "Malaysia", "Maldives", "Mongolia", "New Zealand",
   "North Korea", "Pakistan", "Papua New Guinea", "Philippines", "Samoa", "Singapore", "Soloman Islands", "Sri Lanka", "Taiwan", "Thailand", "Vietnam"];

const scores = [{userName: "Sarah", score: 10}, {userName: "John", score: 14}, {userName: "Jack", score: 8}, {userName: "Laura", score: 16}, {userName: "Matthew", score: 15}];

var array = [];
let score = 0;
let flagCount = 0;
let username = ""

//validate username
function validateName(event) {
    event.preventDefault();
    username = usernameInput.elements['username'].value;
    console.log(username);
    loadGame();
}

let usernameForm = document.getElementById('usernameInput');
usernameForm.addEventListener('submit', validateName);


//load game function called from the start button on index page replace game-box html code
function loadGame() {
   let gameBox = document.getElementById('game-box');
   gameBox.innerHTML = ` <div class= "game-title">
           <h1>FLAGS</h1>
       </div>
       <div class = "rnd-score">
           <span id = "rnd">Flag ${(flagCount)} of 20</h4></span>
           <span id = "score">Score: 0</span>
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

 //Call function to start round 1 of quiz by passing the eur array 
 array = eur.slice();     
 shuffleArray(array);
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
   console.log(array);
   console.log(eur);
   loadQuest();
}


//Function to create a new array called shortArray for each flag question with 4 items
function loadQuest() {
    let shortArray = array.slice(0, 4);
    console.log(shortArray);
    console.log(array);

    //apply shortArray indexes to the buttons innertext
    let country1 = document.getElementById('answer1');
    country1.innerText = shortArray[0];
    let country2 = document.getElementById('answer2');
    country2.innerText = shortArray[1];
    let country3 = document.getElementById('answer3')
    country3.innerText = shortArray[2];
    let country4 = document.getElementById('answer4');
    country4.innerText = shortArray[3];

    //pick a random index from shortArray for the displayed flag, I found the code snippet the following link
    //https://stackoverflow.com/questions/5915096/get-a-random-item-from-a-javascript-array
    //change the string toLowerCase to match image filename
    let flagIndex = (shortArray[Math.floor(Math.random()*shortArray.length)].toLowerCase());

    //remove any spaces from string to match filename as detailed in the code at the link below
    //https://stackoverflow.com/questions/10800355/remove-whitespaces-inside-a-string-in-javascript
    flagIndex.replace(/\s/g, "");
    console.log(flagIndex)

    //apply flag image by setting the img src attribute to use variable flagIndex within the filename
    let flagDisplay = document.getElementById('flag');
    flagDisplay.src="assets/images/"+(flagIndex)+".png";

    //set the img alt attribute to the flagIndex value so that this can be used later in the checkAnswer function
    flagDisplay.alt=(flagIndex);

    //set flag counter
    flagCount = flagCount + 1;
    console.log(flagCount);
    document.getElementById('rnd').innerHTML = `<h4>Flag ${(flagCount)} of 20</h4>`;

}


//Function to check users answer
function checkAnswer(event) {
    //Take the users answer from the DOM button object, transform to lowercase and remove any spaces
    let myAnswer = (event.target.innerText).toLowerCase();
    myAnswer.replace(/\s/g, "");
    console.log(myAnswer);
    /*
    Compare this to the alt attribute on the flag image
    If they match set the button background to green and call the increase score function
    Otherwise change the background to red
    */
    let correctAnswer = document.getElementById('flag').alt;
    console.log(correctAnswer);
    let myAnswerBtn = event.target;
    if (myAnswer === correctAnswer) {
        myAnswerBtn.style.backgroundColor = "green";
        increaseScore();
    } else {
       myAnswerBtn.style.backgroundColor = "red";
    }

   //set timeout before resetting button backgrounds
   setTimeout(clearAnswers, 1000);
   removeFlag();
};

// Increase score
function increaseScore() {
   score = score + 1;
   console.log(score);
   document.getElementById('score').innerHTML = `<h4>Score:${(score)}</h4>`;
}

//Function to clear answer buttons and load another flag 
function clearAnswers() {
   //reset button background colour to white
   //the elements are returned as an array so a for let is used to reset the background style as detailed in the following post
   //https://teamtreehouse.com/community/uncaught-typeerror-cannot-set-property-color-of-undefined-at-scriptjs22
   
   let buttons = document.getElementsByClassName("answer-button");
   for (let button of buttons) {
       button.style.backgroundColor = "white"
    };

    //If flagcount is less than 20 load another flag and answers
    if (flagCount < 20){
        shuffleArray();
    } else {
        gameOver();
    }   
}

//Function to remove used flag from the array in order to eliminate repetition 
function removeFlag() {
    let correctFlag = (document.getElementById('flag').alt);

    //Make first letter of correctFlagC uppercase
    //I used the folowing resource to help write this code https://www.freecodecamp.org/news/javascript-capitalize-first-letter-of-word/
    let correctFlagC = correctFlag.charAt(0).toUpperCase()+ correctFlag.slice(1);

    //Find the index of correctFlagC country in array
    //I used the following resource to help write this code https://sentry.io/answers/remove-specific-item-from-array/
    let usedFlag = array.indexOf(correctFlagC);

    if (usedFlag > -1) {
        array.splice(usedFlag, 1);
    }
}


// Game over function to display final score and reset score and flagcount to 0.
function gameOver(){
    //push username and score to scores array
   scores.push({userName: (username), score: (score)});
   console.log(scores);
   
   //sort scores array in descending order of score as described at the following link https://www.w3schools.com/jsref/jsref_sort.asp
   scores.sort(function(a, b){return b.score-a.score});
   console.log(scores);

    //Change innerhtml to display message and score. Set Play Again button to call the loadgame function.
  let gameBox = document.getElementById('game-box');
  gameBox.innerHTML = `
    <div class= "game-title"> 
        <h1>Game Over</h1>
    </div>

    <div class = "flag-rules">
        <h2>Well done ${username}!</h2>
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
        <button class = "play-button" onclick = "loadGame()">Play Again</button>
    </div>`;
    //reset score and flagcount variables
    score = 0; 
    flagCount = 0;
    
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

}

