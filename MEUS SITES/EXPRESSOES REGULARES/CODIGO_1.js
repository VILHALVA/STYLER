//A
function regexa(){
    var padrao = /^\d{2}\/\d{2}\/\d{4}$/;
    var valor = document.getElementById("a").value;
    if(padrao.test(valor)){
        alert("👍TUDO CERTO! FORMULÁRIO VALIDADO!");
    }
    else{
        alert("😡FORMULÁRIO INVÁLIDO!");
    }
}

//B
function regexb(){
    var padrao = /^\d{3}.\d{3}.\d{3}-\d{2}$/;
    var valor = document.getElementById("b").value;
    if(padrao.test(valor)){
        alert("👍TUDO CERTO! FORMULÁRIO VALIDADO!");
    }
    else{
        alert("😡FORMULÁRIO INVÁLIDO!");
    }
}

//C
function regexc(){
    var padrao = /^(IFTM-|iftm-)\d{3}\/\d{3}-\w{2}$/;
    var valor = document.getElementById("c").value;
    if(padrao.test(valor)){
        alert("👍TUDO CERTO! FORMULÁRIO VALIDADO!");
    }
    else{
        alert("😡FORMULÁRIO INVÁLIDO!");
    }
}

//D
function regexd(){
    var padrao = /^(MT-|mt-)\d{2}.\d{3}-(IFTM|iftm)$/i;
    var valor = document.getElementById("d").value;
    if(padrao.test(valor)){
        alert("👍TUDO CERTO! FORMULÁRIO VALIDADO!");
    }
    else{
        alert("😡FORMULÁRIO INVÁLIDO!");
    }
}

//E
function regexe(){
    var padrao = /^(MT-)\d{2}.\d{3}-(IFTM|iftm)$/;
    var valor = document.getElementById("e").value;
    if(padrao.test(valor)){
        alert("👍TUDO CERTO! FORMULÁRIO VALIDADO!");
    }
    else{
        alert("😡FORMULÁRIO INVÁLIDO!");
    }
}

//F
function regexf(){
    var padrao = /^(M\s?T-)\d{2}.\d{3}-(I\s?F\s?T\s?M|i\s?f\s?t\s?m)$/;
    var valor = document.getElementById("f").value;
    if(padrao.test(valor)){
        alert("👍TUDO CERTO! FORMULÁRIO VALIDADO!");
    }
    else{
        alert("😡FORMULÁRIO INVÁLIDO!");
    }
}

//G
function regexg(){
    var padrao = /^(M\s?T-)\d{2}.\d{3}-(I\s?F\s?T\s?M.|i\s?f\s?t\s?m)\s(Uberlândia Centro|Uberlândia)$/;
    var valor = document.getElementById("g").value;
    if(padrao.test(valor)){
        alert("👍TUDO CERTO! FORMULÁRIO VALIDADO!");
    }
    else{
        alert("😡FORMULÁRIO INVÁLIDO!");
    }
}

//H
function regexh(){
    var padrao = /^(IFTM campus Uberlândia|IFTM campus Uberlândia Centro)$/;
    var valor = document.getElementById("h").value;
    if(padrao.test(valor)){
        alert("👍TUDO CERTO! FORMULÁRIO VALIDADO!");
    }
    else{
        alert("😡FORMULÁRIO INVÁLIDO!");
    }
}

//I
function regexi(){
    var padrao = /^[+]\d{2}[(]\d{2}[)]\d{4,5}-\d{4}$/;
    var valor = document.getElementById("i").value;
    if(padrao.test(valor)){
        alert("👍TUDO CERTO! FORMULÁRIO VALIDADO!");
    }
    else{
        alert("😡FORMULÁRIO INVÁLIDO!");
    }
}

//J
function regexj(){
    var padrao = /^[(]\d{2,3}[)]\d{4,5}-\d{4}$/;
    var valor = document.getElementById("j").value;
    if(padrao.test(valor)){
        alert("👍TUDO CERTO! FORMULÁRIO VALIDADO!");
    }
    else{
        alert("😡FORMULÁRIO INVÁLIDO!");
    }
}

//K
function regexk(){
    var padrao = /^[1](.|,)[3-9]|[1](.|,)[3-9][0-9]|[2](.|,)[5][0]|[2](.|,)[0-4][0-9]|[2](.|,)[5]$/;
    var valor = document.getElementById("k").value;
    if(padrao.test(valor)){
        alert("👍TUDO CERTO! FORMULÁRIO VALIDADO!");
    }
    else{
        alert("😡FORMULÁRIO INVÁLIDO!");
    }
}

//L
function regexl(){
    var padrao = /^(R\$)[0-9]{1}[0-9]{0,2}(\.[0-9]{3}){0,3}(\,[0-9]{1,2})$/;
    var valor = document.getElementById("l").value;
    if(padrao.test(valor)){
        alert("👍TUDO CERTO! FORMULÁRIO VALIDADO!");
    }
    else{
        alert("😡FORMULÁRIO INVÁLIDO!");
    }
}

//M
function regexm(){
    var padrao = /^([01]?[0-9]|2[0-3]):[0-5][0-9](:[0-5][0-9]):[0-9][0-9]?$/;
    var valor = document.getElementById("m").value;
    if(padrao.test(valor)){
        alert("👍TUDO CERTO! FORMULÁRIO VALIDADO!");
    }
    else{
        alert("😡FORMULÁRIO INVÁLIDO!");
    }
}

//N
function regexn(){
    var padrao = /^[A-Za-z0-9.-_]{5,}&[A-Pa-p]{1,}\.[a-z]{1,}\.[A-Za-z0-5]{1,}-[^0-9]{1,},[^A-Za-zÀ-ú0-9]{2}.[^ab01]{1,}$/;
    var valor = document.getElementById("n").value;
    if(padrao.test(valor)){
        alert("👍TUDO CERTO! FORMULÁRIO VALIDADO!");
    }
    else{
        alert("😡FORMULÁRIO INVÁLIDO!");
    }
}