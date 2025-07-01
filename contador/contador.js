let contador = 0;

function aumentar(){
contador += 1;
document.getElementById('div').textContent = contador;
}

function diminuir(){
contador -= 1;
document.getElementById('div').textContent = contador;
}

document.getElementById('Aumentar').addEventListener('click', aumentar);
document.getElementById('Diminuir').addEventListener('click', diminuir);



