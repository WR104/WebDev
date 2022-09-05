const btn = document.querySelector("#work");

btn.onclick = function(){
    console.log("You clicked me");
    console.log("I hope it worked");
}

document.querySelector('h1').onclick = () => {
    alert('you clicked the h1!')
}
 const btn3 = document.querySelector('#v3');
 btn3.addEventListener('dbclick',() => {alert("clicked v3")});

 const input = document.querySelector('input');
 input.addEventListener('keydown',() => {
    console.log('keydown');
 })

 window.addEventListener('keydown',(e) => {
    console.log(e.code);
 })