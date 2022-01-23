const clock = document.querySelector("h2#clock");

function getClock(){
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, "0"); //padStart : 글자수가 2가 될떄까지 0을 추가한다.
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");

    clock.innerText = `${hours}:${minutes}:${seconds}`;
}

getClock(); //즉시호출
setInterval(getClock, 1000); // 1초마다 갱신

//setInterval(sayHello, 5000); setInterval : 매초 반복적으로 무언가를 보여줄려고할떄?

//setTimeout(sayHello, 5000);