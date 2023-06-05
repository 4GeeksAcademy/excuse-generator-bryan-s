/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

const whoToBlame = ["The dog", "My grandma", "His turtle", "My bird"];
const whatTheyDid = ["ate", "peed", "crushed", "broke"];

console.log(whoToBlame[Math.random() * whoToBlame.length]);

function generateExcuse(whoToBlame) {
    return "My random sentence";
}

const pTagHtmlElement = document.querySelector("#excuse");

pTagHtmlElement.innerHTML = generateExcuse();

// Change the excuse in the HTML
document.getElementById('excuse').innerText = generateExcuse();
