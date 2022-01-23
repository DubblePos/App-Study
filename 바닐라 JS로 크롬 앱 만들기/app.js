const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden"; //String 만 있을때 주소 대분자로 작성

function onLoginSubmit(event){
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;
    //greeting.innerText = "Hello " + username; 1번쨰방법
    greeting.innerText = `Hello ${username}`; //2번째 방법 맥은 영어로 바꾸고하면됨
    greeting.classList.remove(HIDDEN_CLASSNAME);
}


loginForm.addEventListener("submit",onLoginSubmit);
