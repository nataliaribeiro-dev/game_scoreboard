let home = document.getElementById("count-home");
let guest = document.getElementById("count-guest");
let zeroGameHome = document.getElementById("newGame");
let zeroGameGuest = document.getElementById("newGame");
let homeCount = 0;
let guestCount = 0;

function add1Home(){
    homeCount = homeCount + 1;
    home.textContent = "0" + homeCount;

}

function add2Home(){
    homeCount = homeCount +2;
    home.textContent = "0" + homeCount;

}

function add3Home(){
    homeCount = homeCount +3;
    home.textContent = "0" + homeCount;

}

function add1Guest(){
    guestCount = guestCount +1;
    guest.textContent = "0" + guestCount;
}

function add2Guest(){
    guestCount = guestCount +2;
    guest.textContent = "0" + guestCount;
}

function add3Guest(){
    guestCount = guestCount +3;
    guest.textContent = "0" + guestCount;
}

function newGame(){
    home.textContent = "00";
    guest.textContent = "00";
    homeCount = 0;
    guestCount = 0;
}