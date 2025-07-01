let listaDeCompras = [];
function atualizarLista() {
    let lista = document.getElementById('lista');
    lista.innerHTML = '';

    listaDeCompras.forEach(function(item) {
        let div = document.createElement('div');
        div.textContent = item;
        let checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        div.appendChild(checkbox);
        div.appendChild(document.createTextNode(' '));
        lista.appendChild(div);
    });
}
document.getElementById('item').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        let item = document.getElementById('item').value.trim();
        if (item) {
            listaDeCompras.push(item);
            document.getElementById('item').value = '';
            atualizarLista();
        }
    }
})
atualizarLista();
