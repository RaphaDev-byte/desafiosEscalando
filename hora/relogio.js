function horaAtual(){
    const agora = new Date();
    const horas = agora.getHours().toString();
    const minutos = agora.getMinutes().toString();
    const segundos = agora.getSeconds().toString();
    document.getElementById("relogio").textContent = `${horas.padStart(2, '0')}:${minutos.padStart(2, '0')}:${segundos.padStart(2, '0')}`;
}

setInterval(horaAtual, 1000);
horaAtual();