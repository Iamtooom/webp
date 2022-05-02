function ShowTime(){
    　document.getElementById('showbox').innerHTML = new Date();
    　setTimeout('ShowTime()',1000);
    }