let endTimer= new Date('December 8, 2021 00:00:00').getTime();
let TimerX= setInterval(function(){
    let startTimer=new Date().getTime();
    let difference=endTimer-startTimer;
    let day=Math.floor(difference/(1000 * 60 * 60 * 24));
    let hour=Math.floor((difference%(1000*60*60*24))/(1000*60*60));
    let minuts=Math.floor((difference%(1000*60*60))/(1000*60));
    let seconds=Math.floor((difference%(1000*60))/(1000));
    document.getElementById('timer').innerHTML=day + '-kun, ' + hour + ':soat,   ' +    minuts + '-minut, ' + seconds + '-sekund ';
    if(difference<0){
        clearInterval();
        document.getElementById('timer').innerHTML=''
    }

},1000);