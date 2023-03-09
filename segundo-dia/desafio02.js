const nome = prompt("Qual o seu nome?");
const idade = prompt("Quantos anos você tem?");
const linguagem = prompt("Qual linguagem de programação você está estudando?");
const msg = `Olá ${nome}, você tem ${idade} anos e já está aprendendo ${linguagem}!`;

alert(msg);

const gosta = prompt(`Você gosta de estudar ${linguagem}? Responda com a letra y - SIM ou n - NÃO`);
if (gosta == 'y') {
    alert ("Muito bom! Continue estudando e você terá muito sucesso.");
}
if (gosta == 'n') {
    alert ("Ahh que pena... Já tentou aprender outras linguagens?");
}