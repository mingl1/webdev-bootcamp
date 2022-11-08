// document.querySelector('p').addEventListener('click',function(){
//     document.querySelector('h1').textContent="sh33sh"
//     document.querySelector('h1').style.color='brown'
// })
document.querySelector('p').addEventListener('click',updateValue);
const cup='coffee'

function updateValue(){
    let userInput = prompt('Make Your Order Here');
    document.querySelector('p').textContent+=': '+userInput;
    document.querySelector('h1').style.color='brown';
}