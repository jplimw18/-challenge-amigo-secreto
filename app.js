// capturando os elementos html com js
let btnAddAmigo = document.getElementById('btnAdd');
let btnSortearAmigo = document.getElementById('btnDraw');
let campoListaAmigos = document.getElementById('listaAmigos')

// inserindo eventos de clique nos respectivos botões
if (btnAddAmigo != null) { btnAddAmigo.addEventListener('click', adicionarAmigo); }
if (btnSortearAmigo != null) { btnSortearAmigo.addEventListener('click', sortearAmigo); }


// ------

let listAmigos = [];

// function limpar() {
//     document.getElementById(id).value = '';
// }

function gerarListItem(content) {
    let li = document.createElement('li');
    li.innerHTML = content;

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

function sortearAmigo() {
    if (campoListaAmigos.innerHTML == '' || campoListaAmigos.innerHTML == null) {
        alert('A lista de nomes está vazia!');
    } else {
        let campoResultado = document.getElementById('resultado');
        campoResultado.innerHTML = '';

        let idx = parseInt(Math.random() * listAmigos.length);
        
        campoResultado.appendChild(gerarListItem(listAmigos[idx]));
        limparLista();
    }
    
}
