const form = document.getElementById('formNumero');

function validarFormulário(valorA, valorB) {
    return valorB > valorA;
}

form.addEventListener('submit' , function(e) {
    let formNumero
    e.preventDefault();

const valorA = document.getElementById('numA').value;
const valorB = document.getElementById('numB').value;
const mensagemSucesso = `É válido, o valor B: ${valorB} é maior que o valor A ${valorA}`;


    formNumero = validarFormulário(valorA, valorB)
    if (formNumero) {
        alert(mensagemSucesso);

        valorA.value = '';
        valorB.value = '';

    } else if (valorB == valorA) {
        alert("Inváldo, os valores são iguais.");
    } else {
        alert("Inváldo, o valor B é menor que o valor A.")
    }
})

console.log(form);
