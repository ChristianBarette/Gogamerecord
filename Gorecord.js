let b1 = document.getElementById('b1');
let b2 = document.getElementById('b2');
let b3 = document.getElementById('b3');
let b4 = document.getElementById('b4');
let p1 = document.getElementById('p1');
let p2 = document.getElementById('p2');
let p3 = document.getElementById('p3');
let p4 = document.getElementById('p4');
let timeoutId;
let intervalId;
let gameon = false;
let timout1son = false;
let Blackon = false;
let Whiteon = false;
let Blackon_saved = false;
let Whiteon_saved = false;
let Black_first_clic = false;
let Pause = false;
let secondes = 0;
let minutes = 0;
let moves = 0;

b1.addEventListener('click', pause_resume);
b2.addEventListener('click', gameover);
b3.addEventListener('click', black_clic);
b4.addEventListener('click', white_clic);
timeoutId = setTimeout(main1s, 1000);
display_init();

function main1s(){ 
    timeoutId = setTimeout(main1s, 1000);
    //alert("main1s");
    if (gameon === false) {
        //alert("gameon false");
        alert("GAME timer forced to 10 min 30 sec");
        // get the time of the game from gamers
        minutes=10;
        secondes=30;
        p1.textContent = 'BLACK Timer = ' + minutes + ' :' + secondes;
        p2.textContent = 'WHITE Timer = ' + minutes + ' :' + secondes;
        // init timers
        btimer=MS_to_millis(minutes,secondes);
        wtimer=MS_to_millis(minutes,secondes);
        gameon = true;
        alert("Black to start");
    } else {
        decrement_timer()
    }
}
function display_init(){
    p1.textContent = 'BLACK Timer = ' + minutes + ' :' + secondes;
    p2.textContent = 'WHITE Timer = ' + minutes + ' :' + secondes;
    p3.textContent = '';
    p4.textContent = '';
}
function pause_resume(){
    alert("pause_resume clic");
    if (Pause === false) {
        Pause = true;
        Blackon_saved = Blackon;
        Blackon = false;
        Whiteon_saved = Whiteon;
        Whiteon = false;        
    } else {
        Pause = false;
        Blackon = Blackon_saved;
        Whiteon = Whiteon_saved;
    }
}
function gameover(){
    alert ("Do you want to exit ? Yes/No ?");
    gameon = false;
    Blackon = false;
    Whiteon = false;
    Black_first_clic = false;
    minutes=0;
    secondes=0;
    moves=0;
    display_init();
}
function black_clic(){
    alert ("BLACK clic");
    if (Black_first_clic === false) {
        Black_first_clic = true;
        Whiteon = true;
        moves = moves + 1;
    } else {
        if (Blackon === true) {
            Blackon = false;
            Whiteon = true;
            moves = moves + 1;
        }
    }
}
function white_clic(){
    alert ("WHITE clic");
    if (Whiteon === true) {
        Blackon = true;
        Whiteon = false;
        moves = moves + 1;
    }    
}   
function decrement_timer(){
    if (Blackon === true) {
        btimer=btimer-1000;
        milli_to_MS(btimer);
        p1.textContent = 'BLACK Timer = ' + minutes + ' :' + secondes;
        p3.textContent = 'Moves: ' + moves;
    }
    if (Whiteon === true) {
        wtimer=wtimer-1000;
        milli_to_MS(wtimer);
        p2.textContent = 'WHITE Timer = ' + minutes + ' :' + secondes;
        p3.textContent = 'Moves: ' + moves;
    }
} 
function MS_to_millis(min, sec){
    let millis = 0;
    millis = (min*60 + sec)*1000;
    return millis;
}
function milli_to_MS(millis){
    millis = millis/1000;
    minutes = Math.trunc(millis / 60);
    secondes = millis % 60;
}