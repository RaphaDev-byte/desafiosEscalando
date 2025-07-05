document.getElementById("formUsuario").addEventListener('submit', function(event) {
    event.preventDefault();

    // Obtém os valores dos campos
    const nome = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const idade = document.getElementById("idade").value;

    // Cria um objeto usuario
    const usuario = { nome, email, password, idade };

    // Recupera a lista atual ou cria uma nova
    let usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];
    usuarios.push(usuario);

    // Salva de volta no localStorage
    localStorage.setItem('usuarios', JSON.stringify(usuarios));

    // Limpa os campos do formulário
    document.getElementById("formUsuario").reset();
});