/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here

  function generadorDeExcusas() {
    let who = ["The dog", "My grandma", "His turtle", "My bird"];
    let action = ["ate", "peed", "crushed", "broke"];
    let what = ["my homework", "the keys", "the car"];
    let when = [
      "before the class",
      "right on time",
      "when I finished",
      "during my lunch",
      "while I was praying"
    ];

    let sujeto = who[Math.floor(Math.random() * who.length)];
    let verbo = action[Math.floor(Math.random() * action.length)];
    let predicado = what[Math.floor(Math.random() * what.length)];
    let predicado2 = when[Math.floor(Math.random() * when.length)];

    return sujeto + " " + verbo + " " + predicado + " " + predicado2;
  }

  const elemento = document.querySelector("#excuse");
  elemento.innerText = generadorDeExcusas();
};
