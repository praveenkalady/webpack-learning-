import Header from "./Header";
import Footer from "./Footer";
import makeColor from "./colors";

import makeButton from "./button";

for(let i=0;i<=100;i++) {
    let button = makeButton(`My ${i} button.......`);
    button.style.background = makeColor("blue");
    document.body.appendChild(button);
}

console.log(Header(),Footer(),makeColor("Grey"));