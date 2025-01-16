alert("Boas Vindas ao nosso site!");

let nome = "Lua";
let idade = "25";
let numeroDeVendas = 50;
let saldoDisponivel = 1000;

alert("Erro! Preencha todos os campos")

let mensagemDeErro = "Erro! Preencha todos os campos";

alert(mensagemDeErro);

nome = prompt("Digite seu nome!");
idade = prompt("Agora digite sua idade!");

if (idade >= 18){
    alert("Pode tirar a habilitação!");
} else {
    alert("Ainda faltam "+ (18 - idade) + " anos para tirar a habilitação T_T");
}

