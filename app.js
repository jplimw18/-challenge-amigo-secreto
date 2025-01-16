// capturando os elementos html com js
let btnAddAmigo = document.getElementById('btnAdd');
let btnSortearAmigo = document.getElementById('btnDraw'); 

// inserindo eventos de clique nos respectivos botões
if (btnAddAmigo != null) { btnAddAmigo.addEventListener('click', adicionarAmigo); }
if (btnSortearAmigo != null) { btnSortearAmigo.addEventListener('click', sortearAmigo); }


// ------

let listAmigos = [];

// function limpar() {
//     document.getElementById(id).value = '';
// }

function adicionarAmigo() {
    let txtAmigo = document.getElementById('amigo');

    if(txtAmigo.value == null || txtAmigo.value == '') {
        alert('Por favor, insira um nome válido!');
    } else {
        listAmigos.push(txtAmigo.value);
        txtAmigo.value = '';
    }
}   

function sortearAmigo() {    

}
