let numero = Math.floor(Math.random() * 10) + 1;

let painel = document.getElementById("painel");

let guess = document.getElementById("guess");

let enviar = document.getElementById("enviar");

enviar.addEventListener("click", function() {
    let palpite = parseInt(guess.value);
    if (palpite === numero) {
        painel.innerHTML = "Parabéns! Você acertou o número: " + numero;
    } else if (palpite < numero) {
        painel.innerHTML = "O número é maior que " + palpite;
    } else {
        painel.innerHTML = "O número é menor que " + palpite;
    }
}
);  
