//Starta a funcao
function go() {

    //Diferencia nas variaveis as letras consoantes e vogais e seleciona o campo de string que possui o id=element
    var str = document.getElementById("element").value;
    var vogal = "AEIOUaeiou";
    var consoante = "bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ";

    //Define as variaveis de resposta e starta valendo 0
    var res1 = 0;
    var res2 = 0;

    //Cria a var x auxiliar e percorre a variavel vogal e consoante
    for (var x = 0; x < str.length; x++) {

        for (var a = 0; a < vogal.length; a++) {
            if (str[x] == vogal[a]) {
                res1++;
            }
        }

        for (var b = 0; b < consoante.length; b++) {
            if (str[x] == consoante[b]) {
                res2++;
            }
        }
    }
    //Retorna para o documento html o elemento que possui como ID os valores e1 e e2 o valor contido nas variaveis res1 e res2
    document.getElementById("e1").innerHTML = " Vogais: " + res1;
    document.getElementById("e2").innerHTML = " Consoantes: " + res2;
}