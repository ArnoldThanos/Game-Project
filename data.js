const gameCards =[
{
    name : 'TheOregonTrial',
    image : './images2/theOregonTrail.jpg',
    year : 1971,
    

},
{
    name : 'pong',
    image : './images2/pong.jpg',
    year : 1972, 

},
{
    name : 'SpaceRace',
    image : './images2/spaceRace.jpg',
    year : 1973, 

},
{
    name : 'MazeWar',
    image : './images2/mazeWar.jpg',
    year : 1974, 

},
{
    name : 'GunFight',
    image : './images2/gunfight.jpg',
    year : 1975, 

},
{
    name : 'Breakout',
    image : './images2/breakout.jpg',
    year : 1976, 

},
{
    name : 'Zork',
    image : './images2/zork.jpg',
    year : 1977, 

},
{
    name : 'SpaceInvaders',
    image : './images2/spaceInvaders.jpg',
    year : 1978, 

},
{
    name : 'Asteroids',
    image : './images2/asteroids.jpg',
    year : 1979, 

},
{
    name : 'Pac-man',
    image : './images2/pacman.jpeg',
    year : 1980, 

},
{
    name : 'DonkeyKong',
    image : './images2/donkeykong.jpg',
    year : 1981, 

},
{
    name : 'Pitfall',
    image : './images2/pitfall.jpg',
    year : 1982, 

},
{
    name : 'Dragons lair',
    image : './images2/dragonsLiar.jpg',
    year : 1983, 

},
{
    name : 'Tetris',
    image : './images2/tetris.jpg',
    year : 1984, 

},
{
    name : 'SuperMarioBros',
    image : './images2/supermariobros.jpg',
    year : 1985, 

},
{
    name : 'TheLegendOfZelda',
    image : './images2/legendofzelda.jpg',
    year : 1986, 

},
{
    name : 'FinalFantasy',
    image : './images2/finalfantasy.jpg',
    year : 1987, 

},
{
    name : 'SuperMarioBros3',
    image : './images2/supermariobros3.jpg',
    year : 1988, 

},
{
    name : 'SimCity',
    image : './images2/simcity.jpg',
    year : 1989, 

},
{
    name : 'SuperMarioWorld',
    image : './images2/supermarioworld.jpeg',
    year : 1990, 

},
{
    name : 'SonicTheHedgehog',
    image : './images2/sonic.jpg',
    year : 1991, 

},
{
    name : 'MortalKombat',
    image : './images2/mortalkombat.png',
    year : 1992, 

},
{
    name : 'DOOM',
    image : './images2/doom.jpg',
    year : 1993, 

},
{
    name : 'DonkeyKongCountry',
    image : './images2/dkcountry.png.jpg',
    year : 1994, 

},
{
    name : 'ChronoTrigger',
    image : './images2/chronotrigger.png',
    year : 1995, 

},
{
    name : 'PokemonRedandBlue',
    image : './images2/pokemon.png',
    year : 1996, 

},
{
    name : 'FinalFantasy7',
    image : './images2/finalFantasy7.jpg',
    year : 1997, 

},
{
    name : 'TheLegendOfZelda:OcarinaOfTime',
    image : './images2/zeldaOcarinaOfTime.jpg',
    year : 1998, 

},
{
    name : 'SuperSmashBros',
    image : './images2/superSmashBros.jpg',
    year : 1999, 

},
{
    name : 'TheSims',
    image : './images2/thesims.jpg',
    year : 2000, 

},
{
    name : 'HALO',
    image : './images2/halo.jpg',
    year : 2001, 

},
{
    name : 'MetroidPrime',
    image : './images2/metroidprime.jpg',
    year : 2002, 

},
{
    name : 'StarWars:KnightsofTheOldRepublic',
    image : './images2/starWarsKnightsofTheOldRepublic.jpg',
    year : 2003, 

},
{
    name : 'Half-life2',
    image : './images2/halflife2.jpg',
    year : 2004, 

},
{
    name : 'ResidentEvil4',
    image : './images2/residentevil4.jpg',
    year : 2005, 

},
{
    name : 'GearsOfWar',
    image : './images2/gearsOfWar.jpg',
    year : 2006, 

},
{
    name : 'BioShock',
    image : './images2/bioshock.png',
    year : 2007, 

},
{
    name : 'Fallout3',
    image : './images2/fallout3.jpg',
    year : 2008, 

},
{
    name : 'Uncharted2:AmongThieves',
    image : './images2/uncharted2.jpg',
    year : 2009, 

},
{
    name : 'RedDeadRedemtion',
    image : './images2/reddeadredemption.jpg',
    year : 2010, 

},
{
    name : 'TheelderScrollsV:Skyrim',
    image : './images2/elderscrolls.png',
    year : 2011, 

},
{
    name : 'Journey',
    image : './images2/journey.png',
    year : 2012, 

},
{
    name : 'GrandThefAutoV',
    image : './images2/grandtheft5.jpeg',
    year : 2013, 

},
{
    name : 'BAyonetta2',
    image : './images2/bayonetta2.png',
    year : 2014, 

},
{
    name : 'Bloodborne',
    image : './images2/bloodborne.png',
    year : 2015, 

},
{
    name : 'Overwatch',
    image : './images2/Overwatch.jpg',
    year : 2016, 

},
{
    name : 'TheLegendOfZelda:BreathOfTheWild',
    image : './images2/breatheofthewild.png',
    year : 2017, 

},
{
    name : 'IntoTheBreach',
    image : './images2/itb-large-final.jpg',
    year : 2018, 

}
] 
console.log(gameCards.length)


// take the div
const game = document.getElementById('timeLine');
// section created with a grid class
const grid = document.createElement('section');

grid.setAttribute('class', 'grid');
// append the grid section to the div
game.appendChild(grid);
//array we safe the random dates of the random cards
let datas = [];
//points at the bigining of the game
let gamePoints = 0;
//difficulty level
let difficultyLevel = 0;


// put random cards from our array of cards
function randomCards(){
    let newArr = Array.from(gameCards);      
    while(datas.length < difficultyLevel){
        let index = Math.floor(Math.random() * newArr.length);
        const card = document.createElement('div')
        card.classList.add('card');
        card.dataset.name = newArr[index].name;
        card.dataset.year = newArr[index].year;
        card.style.backgroundImage = `url(${newArr[index].image})`;
        grid.appendChild(card);          
        datas.push(newArr[index].year);
        newArr.splice(index,1);
       
    }        
    return datas;
}
//array where safe data of the clicked card
let yearsTimeList = [];
// counter of game points
let count = 0;
// initialization of the clicked card
let clicked;

// add event when you click on a image
grid.addEventListener('click', function(event){
    clicked = event.target; 
    if(clicked.nodeName === 'SECTION'){
        return;
    }                
    let year = parseInt(clicked.getAttribute('data-year'),10);
    yearsTimeList.push(year);           
    clicked.classList.add('selected');  
    let div1st = document.getElementById('shuffle');    
    div1st.appendChild(clicked);  
    clicked.innerHTML = "<span>" + clicked.getAttribute('data-year') + "</span>";      
    points(year, count);
    count += 1;    
    winGame(yearsTimeList);
    
}); 

// function that increase or decrease game points
function points(number, count){
    let tablePoints = document.getElementById('points')
    if(datas.sort()[count] === number){
        gamePoints +=10;
        
        console.log(gamePoints);
    }else {
        clicked.classList.add('selected2');
        // if(gamePoints !== 0){
        //     gamePoints -=10;
        // }
    }
    tablePoints.innerHTML = gamePoints;

}

//images of win and lose
document.getElementById('game-over').style.visibility = 'hidden';
document.getElementById('win').style.visibility = 'hidden';

// funtion to check if you win or lose
function winGame(clichedTimeList){
    let b = Array.from(datas);
    let a = Array.from(clichedTimeList);
    let count = 0;
    if(a.length === b.length){
        for(let i = 0; i < a.length; i +=1 ){
            if(a[i] === b[i]){
                count += 1;
            }else{
                count =0;
            }
        }    
    if(count === datas.length){
        myMusic.stop();
        myWinMusic.play();
        document.getElementById('win').style.visibility = 'visible';        
    }else {
        myMusic.stop();
        myLoseMusic.play();
        document.getElementById('game-over').style.visibility = 'visible';
    }    
}
}
3
//choose level

function levelSelected(){
    let buttonSelected = document.querySelectorAll('.level');
    buttonSelected.forEach((e, index)  =>{
        e.addEventListener('click', () => {
            e.classList.add('levelSelected');
            for(let i = 0; i < buttonSelected.length; i +=1){
                if(i !== index){
                    buttonSelected[i].classList.remove('levelSelected');
                }
            }
            difficultyLevel = index <= 0 ? 4 : (index + 2) * 2;
        })
    })
}

levelSelected();   

//start game
window.onload = function() {
    document.getElementById("start-button").onclick = function() {        
        randomCards(); 
        playMusic();
    };
}


// constructor music
function sound(src) {
    this.sound = document.createElement("audio");
    this.sound.src = src;
    this.sound.setAttribute("preload", "auto");
    this.sound.setAttribute("controls", "none");
    this.sound.style.display = "none";
    document.body.appendChild(this.sound);
    this.play = function(){
      this.sound.play();
    }
    this.stop = function(){
      this.sound.pause();
    }
  } 

//game music, lose effect sound and win effect sound
let myMusic;
let myWinMusic;
let myLoseMusic;

function playMusic() {  
  myMusic = new sound("TOP QUIZ GAME SHOW - Thinking Music - Ratemusik.mp3");
  myWinMusic = new sound('Street Fighter II-You Win Perfect.mp3');
  myLoseMusic = new sound('./Mario die   sound effect.mp3');
  myMusic.play();  
}







