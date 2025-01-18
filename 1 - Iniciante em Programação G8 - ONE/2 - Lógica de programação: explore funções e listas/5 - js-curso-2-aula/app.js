let numeroSecreto = gerarNumeroAleatorio();
let quantidaDeNumeros = 10;
let listaNumeros = [];
let tentativas = 1;
function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

exibirTextoNaTela('h1', 'Jogo do número secreto');
exibirTextoNaTela('p', 'Escolha um número entre 1 e 10');

function verificarChute() {
    let chute = document.querySelector('input').value;
    if(chute == numeroSecreto){
        let mensagemTentativa = tentativas > 1? "tentativas":"tentativa";
        let mensagem = `Você descobriu o número secreto com ${tentativas} ${mensagemTentativa}!`;
        exibirTextoNaTela('h1', 'Acertou');
        exibirTextoNaTela('p', mensagem);
        document.getElementById("reiniciar").removeAttribute("disabled");
    } else {
        exibirTextoNaTela('h1', 'Errou');
        if (chute > numeroSecreto ){
            exibirTextoNaTela('p', 'O numero é  menor');
        }else {
            exibirTextoNaTela('p', 'O numero é  maior');
        }
        tentativas++;
    }
}

function gerarNumeroAleatorio() {
    let numeroAleatorio = parseInt(Math.random() * quantidaDeNumeros + 1);
    if (listaNumeros.length == quantidaDeNumeros ){
        listaNumeros = [];
    }
    if (listaNumeros.includes(numeroAleatorio)){
        gerarNumeroAleatorio();
    } else{
        listaNumeros.push(numeroAleatorio);
        return numeroAleatorio;
    }
}

function limparCampo(){
    chute = document.querySelector("input");
    chute.value = "";
    tentativas = 1;
    exibirTextoNaTela('h1', 'Jogo do número secreto');
    exibirTextoNaTela('p', 'Escolha um número entre 1 e 10');
}












