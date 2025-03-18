let nomes = [];

function adicionarNomes() {
    let inputNome = document.getElementById('inputNome').value.trim();

    if (inputNome && !nomes.includes(inputNome)) {
        nomes.push(inputNome);
        // adiciona um novo nome depois de passar pelo if
        document.getElementById('inputNome').value = "";
        // limpa o campo do input após adicionar um novo nome
        
        console.log(nomes);

        const novaDiv = document.createElement('div');
        novaDiv.textContent = inputNome;
        novaDiv.classList.add('nome-item');
        document.getElementById('listaNomes').appendChild(novaDiv);
    }

    else {
        console.log('Não é possível adicionar dois nomes iguais');
    }
}

function sortearAmigoSecreto() {
    let listaDeNomes = [...nomes];
    let indexSorteado = Math.floor(Math.random() * nomes.length);
    let sorteado = nomes.splice(indexSorteado, 1)[0];

    let nomeSorteado = document.getElementById('nomeSorteado');

    if (listaDeNomes.length < 2) {
        nomeSorteado.innerText = 'Não há nomes suficientes para sortear!';
    }

    else if (listaDeNomes.length > 60) {
        nomeSorteado.innerText = 'Quantidade de nomes passou do limite!';
    }

    else if (listaDeNomes.length === 0) {
        nomeSorteado.innerText = 'Todos os nomes foram sorteados';
    }

    else {
        nomeSorteado.innerText = sorteado;
    }
} 

document.getElementById("inputNome").addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
      adicionarNomes();
    }
});