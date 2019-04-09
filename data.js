const gameCards =[
{
    name : 'nintendoSwitch',
    image : './images/nintendoSwitch.jpg',
    year : 2017,
    month : 3

},
{
    name : 'PS4',
    image : './images/ps4.jpeg',
    year : 2013,
    month : 11
},
{
    name : 'xBox360',
    image : './images/xBox360.jpeg',
    year : 2005,
    month : 11
},
{
    name : 'tekken2',
    image : './images/Tekken-2.jpg',
    year : 1995,
    month : 8

},
{
    name : 'lastOfUs',
    image : './images/lastOfUs.jpeg',
    year : 2013,
    month : 5

},
{
    name : 'legendOfZeldaBOTW',
    image : './images/legendOfZeldaBOTW.jpeg',
    year : 2017,
    month : 3

},
{
    name : 'needForSpeed2Undergrpund',
    image : './images/needForSpeed2Underground.jpg',
    year : 2003,
    month : 11

},
{
    name : 'redDeadRedemption',
    image : './images/redDeadRedemtion.jpg',
    year : 2010,
    month : 5

},
{
    name : 'residentEvil3',
    image : './images/residentEvil3.jpg',
    year : 1999,
    month : 9

},
{
    name : 'superMarioWorld',
    image : './images/superMarioWorld.jpeg',
    year : 1990,
    month : 11

},
{
    name : 'uncharted',
    image : './images/uncharted.jpg',
    year : 2007,
    month :11

},
{
    name : 'CastelVaniaLegacyofDarkness',
    image : './images/castelvaniaLegacyofDarkness.jpg',
    year : 1999,
    month : 11

},
{
    name : 'CastelVaniaLordsofShadow',
    image : './images/castlevanialordsofshadow.jpg',
    year : 2010,
    month : 10

},
{
    name : 'DevilMayCry2',
    image : './images/devilMayCry2.jpg',
    year : 2003,
    month : 1

},
{
    name : 'MetroidPrime',
    image : './images/metroidPrime.jpeg',
    year : 2002,
    month : 11

},
{
    name : 'raymanLegends',
    image : './images/raymanLegends.jpg',
    year : 2013,
    month : 8

},
{
    name : 'ShadowOfTheColossus',
    image : './images/shadowOfTheColossus.jpg',
    year : 2005,
    month : 10

},
{
    name : 'Atari',
    image : './images/atari.jpg',
    year : 1977,
    month : 9

},
{
    name : 'GameCube',
    image : './images/gameCube.jpeg',
    year : 2001,
    month : 9

},
{
    name : 'PS1',
    image : './images/ps1.png',
    year : 1994,
    month : 12

},
{
    name : 'PS2',
    image : './images/ps2.png',
    year : 2000,
    month : 3

},
{
    name : 'PS3',
    image : './images/ps3.jpeg',
    year : 2006,
    month : 11

},
{
    name : 'NintendoWii',
    image : './images/nitendoWii.jpg',
    year : 2006,
    month : 9

},
{
    name : 'NintendoWiiU',
    image : './images/wiiU.jpg',
    year : 2006,
    month : 9

},
{
    name : 'xboxOne',
    image : './images/xboxOne.jpg',
    year : 2013,
    month : 11

}

] 


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
        card.dataset.year = newArr[index].year
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
    // if(clicked.classList.contains('selected')){
    //     clicked.classList.remove('selected'); 
    //     clicked.classList.add('card');
    //     grid.appendChild(clicked);            
    // }           
    let year = parseInt(clicked.getAttribute('data-year'),10);
    yearsTimeList.push(year);           
    clicked.classList.add('selected');  
    let div1st = document.getElementById('shuffle');    
    div1st.appendChild(clicked);  
    clicked.innerHTML = clicked.getAttribute('data-year');      
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
        console.log('You Win!');
        document.getElementById('win').style.visibility = 'visible';        
    }else {
        console.log('You lost!');
        document.getElementById('game-over').style.visibility = 'visible';
    }    
}
}

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
            difficultyLevel = index <= 0 ? 3 : (index + 1) * 2;
        })
    })
}


levelSelected();

// let level1 = document.getElementById("level1");
// level1.addEventListener('click', function(){    
//     level1.classList.add('levelSelected');
//     level2.classList.remove('levelSelected');
//     level3.classList.remove('levelSelected');
//     level4.classList.remove('levelSelected');
//     difficultyLevel = 4;
// })

// let level2 = document.getElementById("level2");
// level2.addEventListener('click', function(){   
//     level2.classList.add('levelSelected');    
//     level1.classList.remove('levelSelected');
//     level3.classList.remove('levelSelected');
//     level4.classList.remove('levelSelected');
//     difficultyLevel = 6;
// })

// let level3 = document.getElementById("level3");
// level3.addEventListener('click', function(){
//     level3.classList.add('levelSelected');
//     level1.classList.remove('levelSelected');
//     level2.classList.remove('levelSelected');
//     level4.classList.remove('levelSelected');
//     difficultyLevel = 8;
// })

// let level4 = document.getElementById("level4");
//     level4.addEventListener('click', function(){
//     level4.classList.add('levelSelected');
//     level1.classList.remove('levelSelected');
//     level2.classList.remove('levelSelected');
//     level3.classList.remove('levelSelected');
//     difficultyLevel = 10;
// })



//start game
window.onload = function() {
    document.getElementById("start-button").onclick = function() {        
        randomCards();         
    };
}







