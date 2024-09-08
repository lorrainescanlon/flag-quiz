
const eur = ["Andorra", "Austria", "Belgium", "Bulgaria", "Croatia", "Denmark", "Estonia", "Finland", "France", "Germany", "Greece", "Hungary", "Iceland", "Ireland", "Itlay", "Kosovo",
     "Latvia", "Lithuania", "Netherlands", "Norway", "Poland", "Portugal", "Russia", "Scotland", "Serbia", "Slovakia", "Slovenia", "Spain", "Sweden", "Wales"];

const ame = ["America", "Argentina", "Bahamas", "Bolivia", "Brazil", "Canada", "Chile", "Colombia", "Cuba", "Dominican Republic", "Ecuador", "Greenland", "Grenada", "Guatemala", 
    "Guyana", "Haiti", "Honduras", "Jamaica", "Mexico", "Panama", "Peru", "Puerto Rico", "Saint Lucia", "Suriname", "Trinidad and Tobago", "Uruguay", "Venezuela"];

const mea = ["Algeria", "Azerbaijan", "Bahrain", "Democratic Republic of Congo", "Egypt", "Eritrea", "Ethiopia", "Ghana", "Iran", "Iraq", "Jordan", "Kenya", "Kuwait", "Lebanon",
    "Lesotho", "Malawi", "Morocco", "Namibia", "Nigeria", "Oman", "Palestine", "Qatar", "Rwanda", "Saudi Arabia", "South Afria", "Sudan", "Swaziland", "Syria", "Tajikistan", "Togo",
    "Tunisia", "Turkey", "Uganda", "United Arab Emirates", "Uzbekistan", "Yemen", "Zambia", "Zimbabwe"];

const sea = ["Australia", "Bhutan", "Brunei", "China", "East Timor", "Fiji", "india", "Indonesia", "Japan", "korea", "Macau", "Malaysia", "Maldives", "Mongolia", "New Zealand",
    "North Korea", "Pakistan", "Papua New Guinea", "Philippines", "Samoa", "Singapore", "Soloman Islands", "Sri Lanka", "Taiwan", "Thailand", "Vietnam"];


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

function shuffleR1() {
    console.log(eur);

    for (let i = eur.length -1; i > 0; i --){
        let countryIndex = Math.floor(Math.random()*(i+1));
        [eur[i], eur[countryIndex]] = [eur[countryIndex], eur[i]];
    }

    console.log(eur);

}
