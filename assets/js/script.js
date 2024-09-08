
const eur = ["Andorra", "Austria", "Belgium", "Bulgaria", "Croatia", "Denmark", "Estonia", "Finland", "France", "Germany", "Greece", "Hungary", "Iceland", "Ireland", "Itlay", "Kosovo",
     "Latvia", "Lithuania", "Netherlands", "Norway", "Poland", "Portugal", "Russia", "Scotland", "Serbia", "Slovakia", "Slovenia", "Spain", "Sweden", "Wales"];

const ame = ["America", "Argentina", "Bahamas", "Bolivia", "Brazil", "Canada", "Chile", "Colombia", "Cuba", "Dominican Republic", "Ecuador", "Greenland", "Grenada", "Guatemala", 
    "Guyana", "Haiti", "Honduras", "Jamaica", "Mexico", "Panama", "Peru", "Puerto Rico", "Saint Lucia", "Suriname", "Trinidad and Tobago", "Uruguay", "Venezuela"];

const mea = ["Algeria", "Azerbaijan", "Bahrain", "Democratic Republic of Congo", "Egypt", "Eritrea", "Ethiopia", "Ghana", "Iran", "Iraq", "Jordan", "Kenya", "Kuwait", "Lebanon",
    "Lesotho", "Malawi", "Morocco", "Namibia", "Nigeria", "Oman", "Palestine", "Qatar", "Rwanda", "Saudi Arabia", "South Afria", "Sudan", "Swaziland", "Syria", "Tajikistan", "Togo",
    "Tunisia", "Turkey", "Uganda", "United Arab Emirates", "Uzbekistan", "Yemen", "Zambia", "Zimbabwe"];

const sea = ["Australia", "Bhutan", "Brunei", "China", "East Timor", "Fiji", "india", "Indonesia", "Japan", "korea", "Macau", "Malaysia", "Maldives", "Mongolia", "New Zealand",
    "North Korea", "Pakistan", "Papua New Guinea", "Philippines", "Samoa", "Singapore", "Soloman Islands", "Sri Lanka", "Taiwan", "Thailand", "Vietnam"];


    /*
    load game function called from the start button on index page
    replace game-box html code
    */

function loadGame() {
    let gameBox = document.getElementById('game-box');
    gameBox.innerHTML = ` <div class= "game-title">
            <h1>FLAGS</h1>
        </div>
        <div class = "rnd-score">
            <span id = "rnd"><h4>Round:</h4></span>
            <span id = "score"><h4>Score:</h4></span>
        </div>
        <div class = "flag-image-container">
            <img class="flag-image" id = "flag" src="assets/images/ireland.png">
        </div>
        <div class = "flag-answers">
            <button class = "answer-button" id ="answer1"><h3>Country1</h3></button>
            <button class = "answer-button" id = "answer2"><h3>Country 2</h3></button>
            <button class = "answer-button" id = "answer3"><h3>Country 3</h3></button>
            <button class = "answer-button" id = "answer4"><h3>Country 4</h3></button>
        </div>
        <div class = "quit-control">
            <button class = "quit-button" onclick = "location.href = 'index.html'">Quit</button>
        </div>`;
  shuffleR1();
    }

    /*
    Use Fisher-Yates Sorting Algorithm to shuffle array for round 1 
    https://www.freecodecamp.org/news/how-to-shuffle-an-array-of-items-using-javascript-or-typescript
    */

function shuffleR1() {
    console.log(eur);

    for (let i = eur.length -1; i > 0; i --){
        let countryIndex = Math.floor(Math.random()*(i+1));
        [eur[i], eur[countryIndex]] = [eur[countryIndex], eur[i]];
    }
    console.log(eur);

    //create a short array for each flag question
    const shortArray = eur.slice(0,4);
    console.log(shortArray);

    //apply array indexes to the buttons
    let country1 = document.getElementById('answer1');
    country1.innerText = shortArray[0];
    let country2 = document.getElementById('answer2');
    country2.innerText = shortArray[1];
    let country3 = document.getElementById('answer3')
    country3.innerText = shortArray[2];
    let country4 = document.getElementById('answer4');
    country4.innerText = shortArray[3];

    //pick a random index for the displayed flag
    //https://stackoverflow.com/questions/5915096/get-a-random-item-from-a-javascript-array
    let flagIndex = shortArray[Math.floor(Math.random()*shortArray.length)];
    console.log(flagIndex);



}

