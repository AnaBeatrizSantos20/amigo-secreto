let nome = [];

function adicionarAmigo(){
    let adicionarNome = document.getElementById('amigo');

    // Valida se o capampo esta vazio
    if(adicionarNome.value.trim() === ''){
        alert('Por favor, insira um nome !')
        return;
    }

    nome.push(adicionarNome.value.trim());// Adiciona o nome do Array
    //alert('Amigo adicionado !');

    adicionarNome.value = '';// limpa campo do amigo

    atualizarLista();
};

function atualizarLista(){
    let listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = '';

    for (let i = 0; i < nome.length; i++) {
        let li = document.createElement("li");
        li.textContent = nome[i];
        listaAmigos.appendChild(li);
    }
};

function sorteio(){
    let resultado = document.getElementById("resultado"); 
    
    // Validar que há amigos disponíveis
    if (nome.length === 0) { 
        resultado.innerHTML = "Nenhum amigo disponível para sortear.";
        return; 
    }
    // Gerar um índice aleatório
    let indiceAleatorio = Math.floor(Math.random() * nome.length); 
    // Obter o nome sorteado 
    let amigoSorteado = nome[indiceAleatorio];
    // Mostrar o resultado 
    resultado.innerHTML = "Amigo sorteado: " + amigoSorteado;
}

