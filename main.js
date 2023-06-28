const hexElText = document.querySelector("#hex");
const generateAuto = document.querySelector("#generateAuto");
const generateButton = document.querySelector("#generate");
const generateBG = document.querySelector("#generateBG");
const hexCode = [1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

// generate color for text or bg by argument
const generateHex = (el) => {
    console.log(el)
    const hexElColor = document.querySelector(`${el}`);
    console.log(hexElColor)
    let hex = '#';

    for (let i = 0; i < 6; i++) {
        var randomIndex = Math.floor(Math.random() * hexCode.length);

        hex += hexCode[randomIndex]
    }

    if (el === "#main") {
        hexElColor.style.background = hex;
        hexElText.innerHTML = hex;
    } else {
        hexElColor.style.color = hex;
        hexElText.innerHTML = hex;
    }
}


// 10 seconds of random text color
let autoGenerate = (el) => {
    let auto = setInterval(() => generateHex(el), 1000);
    setTimeout(() => { clearInterval(auto); alert('stop'); }, 10000);
}

// Button listeners
generateButton.addEventListener("click", () => generateHex(".hex__phrase"));
generateBG.addEventListener("click", () => generateHex("#main"));
generateAuto.addEventListener("click", () => autoGenerate(".hex__phrase"));