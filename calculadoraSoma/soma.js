const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function calcularSoma(num1, num2) {
  return num1 + num2;
}

rl.question('Digite o primeiro número: ', (numero1) => {
  rl.question('Digite o segundo número: ', (numero2) => {
    const soma = calcularSoma(Number(numero1), Number(numero2));
    console.log('A soma é: ' + soma);
    rl.close();
  });
});