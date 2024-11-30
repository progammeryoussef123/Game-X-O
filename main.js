let img = document.querySelector('img');
let change = ['images/img-1.png' , 'images/img-2.png' , 'images/img-3.png' , 'images/img-4.png' , 'images/img-5.png' , 'images/img-6.png'];
let i = 0;
function joker(){
    img.src = change[i];
    i = (i + 1) % change.length;
    setTimeout(function(){   joker();     } , 1000);
}
joker();


let title = document.querySelector(".title");
let turn = 'x';
let isGameOver = false;
let xWins = localStorage.getItem('xWins') ? parseInt(localStorage.getItem('xWins')) : 0;
let oWins = localStorage.getItem('oWins') ? parseInt(localStorage.getItem('oWins')) : 0;

document.getElementById("x-wins").innerHTML = `X: ${xWins}`;
document.getElementById("o-wins").innerHTML = `O: ${oWins}`;

function updateWins() {
    document.getElementById("x-wins").innerHTML = `X : ${xWins}`;
    document.getElementById("o-wins").innerHTML = `O : ${oWins}`;
    localStorage.setItem('xWins', xWins);
    localStorage.setItem('oWins', oWins);
}

function get(id) {
    if (isGameOver) return;
    let element = document.getElementById(id);
    if (turn === 'x' && element.innerHTML === '') {
        element.innerHTML = "X";
        turn = 'o';
        title.innerHTML = 'O Game';
        title.style.color = 'aqua';
    } else if (turn === 'o' && element.innerHTML === '') {
        element.innerHTML = 'O';
        turn = 'x';
        title.innerHTML = "X Game";
        title.style.color = 'aqua';
    }
    winner();
}

let squers = [];

function end(num1, num2, num3) {
    document.getElementById('item' + num1).style.background = '#ffffff8a';
    document.getElementById('item' + num2).style.background = '#ffffff8a';
    document.getElementById('item' + num3).style.background = '#ffffff8a';
    title.innerHTML = `${squers[num1]} winner `;
    if (squers[num1] === 'X') {
        xWins++;
    } else {
        oWins++;
    }
    isGameOver = true;
    updateWins();
    setInterval(function () { title.innerHTML += '৳'; }, 1000);
    setTimeout(function () { location.reload();  }, 3000);
}

function winner() {
    for (let i = 1; i < 10; i++) {
        squers[i] = document.getElementById('item' + i).innerHTML;
    }

    if (squers[1] === squers[2] && squers[2] === squers[3] && squers[1] !== '') {
        end(1, 2, 3);
    } else if (squers[4] === squers[5] && squers[5] === squers[6] && squers[4] !== '') {
        end(4, 5, 6);
    } else if (squers[7] === squers[8] && squers[8] === squers[9] && squers[7] !== '') {
        end(7, 8, 9);
    } else if (squers[1] === squers[4] && squers[4] === squers[7] && squers[1] !== '') {
        end(1, 4, 7);
    } else if (squers[2] === squers[5] && squers[5] === squers[8] && squers[2] !== '') {
        end(2, 5, 8);
    } else if (squers[3] === squers[6] && squers[6] === squers[9] && squers[3] !== '') {
        end(3, 6, 9);
    } else if (squers[1] === squers[5] && squers[5] === squers[9] && squers[1] !== '') {
        end(1, 5, 9);
    } else if (squers[3] === squers[5] && squers[5] === squers[7] && squers[3] !== '') {
        end(3, 5, 7);
    } else if (!squers.includes('')) {
        title.innerHTML = 'No one won!';
        isGameOver = true;
        setTimeout(function () { location.reload();   }, 4000);
    }
}
function resetWins() { 
    localStorage.removeItem('xWins'); 
    localStorage.removeItem('oWins'); 
    xWins = 0; 
    oWins = 0; updateWins(); 
}
document.addEventListener("DOMContentLoaded", function() {
    updateWins();
});

let no = document.getElementById("no");
let test = document.getElementById("test");
let game = document.querySelector(".game");
let event = document.querySelector(".event");
let phote = document.querySelector("img");

window.onload = ()=>{
    if(window.navigator.onLine){
        online();
    }
    else{
        offline();
    }
}
window.addEventListener("online" , function(){
    online();
})
window.addEventListener("offline" , function(){
    offline();
})
test.onclick = ()=>{
    window.location.reload();
}

function online(){
    no.style.display = 'none';
    test.style.display = 'none';
    game.style.display = 'block';
    event.style.display = 'block';
    phote.style.display = 'block';
}

function offline(){
    no.style.display = 'block';
    test.style.display = 'block';
    game.style.display = 'none';
    event.style.display = 'none';
    phote.style.display = 'none';
}