//Seleciona o elemento de entrada e saida de informacoes
let output = document.querySelector('textarea');
let decode = document.getElementById("decodifica");


//Adiciona um evento de decodificar ao clicar no botao de id=decodifica
//Utiliza o metodo atob para decodificacao da string em base64 informada pelo usuario
decode.addEventListener('click', () => {
    output.value = atob(output.value);
});