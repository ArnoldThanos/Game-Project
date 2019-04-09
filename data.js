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
function randomCards(){
    let newArr = Array.from(gameCards);      
    while(datas.length < 8){
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

console.log(randomCards());

// add event when you click on a image

let yearsTimeList = [];

grid.addEventListener('click', function(event){
    let clicked = event.target; 
    if(clicked.nodeName === 'SECTION'){
        return;
    }        
    yearsTimeList.push((parseInt(clicked.getAttribute('data-year'),10)));           
    clicked.classList.add('selected');  
    let div1st = document.getElementById('shuffle');    
    div1st.appendChild(clicked);  
    clicked.innerHTML = clicked.getAttribute('data-year'),10;   
    console.log(yearsTimeList);
    winGame(yearsTimeList);

});
// console.log(randomCards());
console.log(datas.sort())

// funtion to check if you win

function winGame(clichedTimeList){
    let b = Array.from(datas);
    let a = Array.from(clichedTimeList);
    let count;
    if(a.length === b.length){
        for(let i = 0; i < a.length; i +=1 ){
            if(a[i] === b[i]){
                count = 0;
            }else{
                count +=1;
            }
        }    
    if(count === 0){
        console.log('You Win!');
    }else {
        console.log('You lost!');
    }    
    }
}


randomCards();





