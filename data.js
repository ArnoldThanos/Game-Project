const gameCards =[
{
    name : 'nintendoSwitch',
    image : './images/nintendoSwitch.jpg',
    year : 2017

},
{
    name : 'PS4',
    image : './images/ps4.jpeg',
    year : 2013
},
{
    name : 'xBox360',
    image : './images/xBox360.jpeg',
    year : 2005
},
{
    name : 'tekken2',
    image : './images/Tekken-2.jpg',
    year : 1995

},
{
    name : 'lastOfUs',
    image : './images/lastOfUs.jpeg',
    year : 2013

},
{
    name : 'legendOfZeldaBOTW',
    image : './images/legendOfZeldaBOTW.jpeg',
    year : 2017

},
{
    name : 'needForSpeed2Undergrpund',
    image : './images/needForSpeed2Underground.jpg',
    year : 2003

},
{
    name : 'redDeadRedemption',
    image : './images/redDeadRedemtion.jpg',
    year : 2010

},
{
    name : 'residentEvil3',
    image : './images/residentEvil3.jpg',
    year : 1999

},
{
    name : 'superMarioWorld',
    image : './images/superMarioWorld.jpeg',
    year : 1990 

},
{
    name : 'uncharted',
    image : './images/uncharted.jpg',
    year : 2007

},
{
    name : 'CastelVaniaLegacyofDarkness',
    image : './images/castelvaniaLegacyofDarkness.jpg',
    year : 1999

},
{
    name : 'CastelVaniaLordsofShadow',
    image : './images/castlevanialordsofshadow.jpg',
    year : 2010

},
{
    name : 'DevilMayCry2',
    image : './images/devilMayCry2.jpg',
    year : 2003

},
{
    name : 'MetroidPrime',
    image : './images/metroidPrime.jpeg',
    year : 2002

},
{
    name : 'raymanLegends',
    image : './images/raymanLegends.jpg',
    year : 2012

},
{
    name : 'ShadowOfTheColossus',
    image : './images/shadowOfTheColossus.jpg',
    year : 2005

}
] 


// take the div
const game = document.getElementById('timeLine');
// section created with a grid class
const grid = document.createElement('section');

grid.setAttribute('class', 'grid');
// append the grid section to the div
game.appendChild(grid);
// put random cards from our array of cards
let datas = [];
let gamePoints = 0;

function randomCards(){
    let newArr = Array.from(gameCards);      
    while(datas.length < 5){
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



// add event when you click on a image

let yearsTimeList = [];
let count = 0;
let clicked;

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
console.log(clicked);

function points(number, count){
    let tablePoints = document.getElementById('points')
    if(datas.sort()[count] === number){
        gamePoints +=10;
        
        console.log(gamePoints);
    }else {
        clicked.classList.add('selected2');
        if(gamePoints !== 0){
            gamePoints -=10;
        }
    }
    tablePoints.innerHTML = gamePoints;

}


// funtion to check if you win
document.getElementById('game-over').style.visibility = 'hidden';
document.getElementById('win').style.visibility = 'hidden';

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

window.onload = function() {
    document.getElementById("start-button").onclick = function() {        
        randomCards();    
        console.log(datas.sort());
    };
}







