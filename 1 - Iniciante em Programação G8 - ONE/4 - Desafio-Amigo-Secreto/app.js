//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

let listaDeAmigosEscolhidos = [];
let listaAmigos = document.getElementById('listaAmigos');
let resultado = document.getElementById('resultado');
let quantidadeDePessoas = 0;
let amigoAleatorio = "";
let indice = 0;

function adicionarAmigo(){
    let nome = document.getElementById('amigo').value;
    if(nome == ""){
        alert("Digite o nome de um amigo!")
    } else {
        
        let novoItem = document.createElement("li");
        novoItem.textContent = nome;
        listaAmigos.appendChild(novoItem);
    }
}

function sortearAmigo(){
    quantidadeDePessoas = listaAmigos.children.length;
    if (quantidadeDePessoas == 0){
        alert("Antes de fazer o sorteio adicione os nomes ");
    } 
    let indiceAleatorio = parseInt(Math.random() * quantidadeDePessoas);
    amigoAleatorio = listaAmigos.children[indiceAleatorio].textContent;

    if (listaDeAmigosEscolhidos.includes(amigoAleatorio)){
        sortearAmigo();
    }else{
        listaDeAmigosEscolhidos.push(amigoAleatorio);
        mostrarResultado (amigoAleatorio);
    }
}

function mostrarResultado (amigoAleatorio){
    resultado.innerHTML = `O amigo secreto sorteado é :${amigoAleatorio}`;
}
