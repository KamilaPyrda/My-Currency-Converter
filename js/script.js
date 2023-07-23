let currencyElement = document.querySelector(".js-currency");
let quantityElement = document.querySelector(".js-quantity");
let formElement = document.querySelector(".js-form");
let resultElement = document.querySelector(".js-result");
let resetElement = document.querySelector(".js-resetText");

formElement.addEventListener("submit", (event) => {
    event.preventDefault();

    let quantity = quantityElement.value;
    let currency = currencyElement.value;

    let HUF = 1.2438;
    let ISK = 3.1183;
    let JPY = 3.1730;

    switch (currency) {
        case "HUF":
            rate = HUF;
            break;

        case "ISK":
            rate = ISK;
            break;

        case "JPY":
            rate = JPY;
            break;
    }

    let result = quantity * 100 / rate;

    resetElement.innerText = null;
    resultElement.innerText = `${result.toFixed(2)} ${currency}`;
});

formElement.addEventListener("reset", () => {
    console.log("Formularz został zresetowany");

    resultElement.innerText = "NaN";
    resetElement.innerText = "Formularz został wyczyszczony!";
});