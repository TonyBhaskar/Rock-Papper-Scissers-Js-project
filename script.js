const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissers = document.getElementById('scissers');
var showResults = document.getElementById('show-result');
const display = document.getElementById('display-selected');
// console.log(showResults.textContent) 

var resetButton = document.querySelector('button');
var yourSelection = document.getElementById('you-selected');
var botSelected = document.getElementById('bot-selected');

var score = document.getElementById('your-score');
console.log(typeof Number(score.textContent));




// 0,1,2 = rock, paper, scissers
var itemNames = ['rock', 'paper', 'scissers'];
var items = [
    '<img id="rock-img" src="./images/rock-emoji.png" alt="">',
    '<img id="paper-img" src="./images/paper-emoji.png" alt="">',
    '<img id="sissers-img" src="./images/scissors-emoji.png" alt="">'
];
var botScore = Number(document.getElementById('bot-score').textContent);
// console.log(typeof botScore)
var yourScore = Number(document.getElementById('your-score').textContent);
// console.log(typeof yourScore)
// console.log(items['rock'])
console.log(showResults.textContent);
resetButton.addEventListener('click', function(){
    botScore = 0;
    yourScore = 0;
    document.getElementById('your-score').textContent = yourScore;
    document.getElementById('bot-score').textContent = botScore;
    alert('Your score will be lost');
    display.style.display = 'none';
});

rock.addEventListener('click', function(){
    display.style.display = 'block';
    let selected = 'rock';
    yourSelection.innerHTML = this.innerHTML;
    var randomIndex = Math.floor(Math.random()*3)
    // console.log(randomIndex)
    botSelected.innerHTML = items[randomIndex];
    let bots = itemNames[randomIndex]
    console.log(bots)
    if (selected === bots){
        showResults.textContent =  `You selected ${selected} and bot selected ${bots} so it is TIE`;
    }
    if(bots === 'paper'){
        showResults.textContent =  `You selected ${selected} and bot selected ${bots} so bot won`;
        botScore = botScore + 1;
        document.getElementById('bot-score').textContent = botScore;
    }
    if(bots === 'scissers'){
        showResults.textContent =  `You selected ${selected} and bot selected ${bots} so you won`;
        yourScore = yourScore + 1;
        document.getElementById('your-score').textContent = yourScore;
    }

    resetButton.style.display = 'inline';

})


paper.addEventListener('click', function(){
    display.style.display = 'block';
    let selected = 'paper';
    yourSelection.innerHTML = this.innerHTML;
    var randomIndex = Math.floor(Math.random()*3)
    // console.log(randomIndex)
    botSelected.innerHTML = items[randomIndex];
    let bots = itemNames[randomIndex]
    console.log(bots)
    if (selected === bots){
        showResults.textContent =  `You selected ${selected} and bot selected ${bots} so it is TIE`;
    }
    if(bots === 'rock'){
        showResults.textContent =  `You selected ${selected} and bot selected ${bots} so you won`;
        yourScore = yourScore +1;
        document.getElementById('your-score').textContent = yourScore;
    }
    if(bots === 'scissers'){
        showResults.textContent =  `You selected ${selected} and bot selected ${bots} so bot won`;
        botScore =botScore + 1;
        document.getElementById('bot-score').textContent = botScore;
    }
    resetButton.style.display = 'inline';
})


scissers.addEventListener('click', function(){
    display.style.display = 'block';
    let selected = 'scissers';
    yourSelection.innerHTML = this.innerHTML;
    var randomIndex = Math.floor(Math.random()*3)
    // console.log(randomIndex)
    botSelected.innerHTML = items[randomIndex];
    let bots = itemNames[randomIndex]
    console.log(bots)
    if (selected === bots){
        showResults.textContent =  `You selected ${selected} and bot selected ${bots} so it is TIE`;
    }
    if(bots === 'paper'){
        showResults.textContent =  `You selected ${selected} and bot selected ${bots} so you won`;
        yourScore = yourScore + 1;
        document.getElementById('your-score').textContent = yourScore;
    }
    if(bots === 'rock'){
        showResults.textContent =  `You selected ${selected} and bot selected ${bots} so bot won`;
        botScore = botScore + 1;
        document.getElementById('bot-score').textContent = botScore;
    }
    resetButton.style.display = 'inline';
})

