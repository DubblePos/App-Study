const clock = document.querySelector("h2#clock");

function getClock(){
    const date = new Date();
    clock.innerText = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
}

getClock();
setInterval(getClock, 1000);

//setInterval(sayHello, 5000); setInterval : 매초 반복적으로 무언가를 보여줄려고할떄?

//setTimeout(sayHello, 5000);