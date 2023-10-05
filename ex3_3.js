const prompt = require("prompt-sync")(); // adiciona o pacote ao programa
const salario = Number(prompt("Qual é o seu salário? ")); // lê os dados de entrada
const tempo = Number(prompt("Quantos anos você tem de empresa? "))

const quadrienios = Math.floor(tempo / 4); // calcula os quadrienios por baixo - floor
const acrescimo = (salario * quadrienios) / 100; // ... e acréscimo

console.log(`Quadrienios: ${quadrienios}`); // exibe as respostas
console.log(`Salário Final R$: ${(salario + acrescimo).toFixed(2)}`);