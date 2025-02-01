// capturando os elementos html com js
let btnAddAmigo = document.getElementById('btnAdd');
let btnSortearAmigo = document.getElementById('btnDraw');
let campoListaAmigos = document.getElementById('listaAmigos')
let btnSortearPares = document.getElementById('btnDrawPar');

// inserindo eventos de clique nos respectivos botões
if (btnAddAmigo != null) { btnAddAmigo.addEventListener('click', adicionarAmigo); }
if (btnSortearAmigo != null) { btnSortearAmigo.addEventListener('click', sortearAmigo); }
if (btnSortearPares != null) { btnSortearPares.addEventListener('click', sortearAmigoPar) }

// ------

let listAmigos = [];

// function limpar() {
//     document.getElementById(id).value = '';
// }

function gerarListItem(content) {
    let btnRemover = document.createElement('button');
    btnRemover.innerHTML = '🗑️';
    btnRemover.classList.add('button-remove');
    btnRemover.addEventListener('click', removerAmigo);

    let p = document.createElement('p');
    p.innerHTML = content;

    let li = document.createElement('li');
    li.appendChild(btnRemover);
    li.appendChild(p);

    return li;
}

function gerarResultItem(content) {
    let p = document.createElement('p');
    p.innerHTML = content;

    let li = document.createElement('li');
    li.appendChild(p);

    return li;
}

function atualizarLista(amigo) {
    campoListaAmigos.appendChild(gerarListItem(amigo));
    listAmigos.push(amigo);
}

function limparLista() {
    campoListaAmigos.innerHTML = '';
    listAmigos = [];
}

function adicionarAmigo() {
    let txtAmigo = document.getElementById('amigo');

    if(txtAmigo.value == null || txtAmigo.value == '') {
        alert('Por favor, insira um nome válido!');
    } else {
        atualizarLista(txtAmigo.value);
        txtAmigo.value = '';
    }
}

function removerAmigo() {
    let li = this.parentNode;
    let nomeAmigo = li.lastElementChild.textContent;

    if (listAmigos.includes(nomeAmigo)) {
        let idx = listAmigos.findIndex(amigo => amigo === nomeAmigo);
        listAmigos.splice(idx, 1);

        li.remove();
    }
}

function sortearAmigo() {
    if (listAmigos.length == 0 || listAmigos == null) {
        alert('A lista de nomes está vazia!');
    } else {
        let campoResultado = document.getElementById('resultado');
        campoResultado.innerHTML = '';

        let idx = parseInt(Math.random() * listAmigos.length);

        campoResultado.appendChild(gerarResultItem(listAmigos[idx]));
        limparLista();
    }  
}

function sortearAmigoPar() {
    if (listAmigos.length == 0 || listAmigos == null) {
        alert('A lista de nomes está vazia!');
    } else if (listAmigos.length % 2 != 0) {
        alert('A lista de nomes não possui nomes suficientes para formar pares!');
    } else {
        let campoResultado = document.getElementById('resultado');
        campoResultado.innerHTML = "Teste";

        
    }
}
