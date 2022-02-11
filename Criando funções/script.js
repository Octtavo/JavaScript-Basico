function trocarDiv(nome) {
    var area = document.getElementById("area");
    var texto = prompt("Qual seu sobrenome?");

    area.innerHTML = nome+" "+texto  
}
function fazerAcao(certo) {
    var titulo = document.getElementById("titulo");
    var mudar = prompt("Mude");

titulo.innerHTML = certo+" "+mudar
}