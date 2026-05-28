// import "bootstrap";
// import "./style.css";


// import "./assets/img/rigo-baby.jpg";
// import "./assets/img/4geeks.ico";

window.onload = function () 
{
  let who = ['The dog', 'My grandma', 'The mailman', 'My bird'];
  let action = ['ate', 'peed', 'crushed', 'broke'];
  let what = ['my homework', 'my phone', 'the car'];
  let when = ['before the class', 'when I was sleeping', 'while I was exercising', 'during my lunch', 'while I was praying'];
  
  function generarExcusa() {

    let numberWho = Math.floor(Math.random() * who.length);
    let numberAction = Math.floor(Math.random() * action.length);
    let numberWhat = Math.floor(Math.random() * what.length);
    let numberWhen = Math.floor(Math.random() * when.length);

    document.querySelector("#excuse").innerHTML = who[numberWho] + " " + action[numberAction] + " " + what[numberWhat] + " " + when[numberWhen];
  }
  
generarExcusa();

  const boton = document.getElementById("pulsar");

  boton.addEventListener("click", generarExcusa);
  console.log("Hello Rigo from the console!");
};