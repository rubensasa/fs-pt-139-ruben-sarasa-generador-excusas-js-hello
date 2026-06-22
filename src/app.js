window.onload = function () 
{
  let who = ['The dog', 'My grandma', 'The mailman', 'My bird'];
  let action = ['ate', 'peed', 'crushed', 'broke'];
  let what = ['my homework', 'my phone', 'the car'];
  let when = ['before the class', 'when I was sleeping', 'while I was exercising', 'during my lunch', 'while I was praying'];
  
  function generarExcusa() {

    let nWho = Math.floor(Math.random() * who.length);
    let nAction = Math.floor(Math.random() * action.length);
    let nWhat = Math.floor(Math.random() * what.length);
    let nWhen = Math.floor(Math.random() * when.length);

    document.querySelector("#excuse").innerHTML = who[nWho] + " " + action[nAction] + " " + what[nWhat] + " " + when[nWhen];
  }
  
generarExcusa();

  const boton = document.getElementById("pulsar");

  boton.addEventListener("click", generarExcusa);
  console.log("Hello Rigo from the console!");
};