document.querySelector("h1").innerHTML = "Hora do Desafio";

function consoleButton(){
    console.log("O botão foi clicado");
}

function alertButton(){
    console.log("Eu amo JS");
}


function promptButtton(){
    let cityName = prompt ("Digite uma cidade do Brasil");
    alert(`Estive em ${cityName} e lembrei de voce`);
}

function somaButtton(){
    let number1 = parseInt(prompt ("Digite o primeiro número"));
    let number2 = parseInt(prompt ("Digite o segundo número"));
    
    alert(`O resultado da soma foi ${number1 + number2}`);
}