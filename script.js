let myH1 = document.getElementsByTagName("h1")[0];
myH1.innerText = "Scopri tutte le migliori offerte del sito!"

let myBody = document.getElementsByTagName("body")[0];
myBody.style.backgroundColor = "lightlightgrey";

let myAddress = document.getElementById("footer");
myAddress.innerText = "Via le mani dalle tasche 12, Inventonia";

let myAh = document.querySelectorAll("a");
for (let i = 0; i < myAh.length; i++) {
    myAh[i].classList.add("link");
}

let myImg = document.querySelectorAll("img");
for (let i = 0; i < myImg.length; i++) {
    myImg[i].classList.toggle("hidden");
    myImg[i].style.visibility = "hidden";
}

function randomColor(n) {
    let array = [];  
    for (let i = 0; i < n; i++) {
        let randomNumber = Math.floor(Math.random() * 300);
        array.push(randomNumber);       
    }

    let myColor = "rgb(" + array[0] + ", " + array[1] + ", " + array[2] + ")"

    let myPrice = document.getElementsByClassName("prezzo");
    for (let i = 0; i< myPrice.length; i++) {
        myPrice[i].style.color = myColor
    }
}

let myFunction = randomColor(6)