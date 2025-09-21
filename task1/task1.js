// Hesablayici
function hesab (a , b, param) {
    return param(a,b);
}

// Case-ler
function toplama (a,b){
    return a + b;
}
function cixma (a,b){
    return a - b;
}
function vurma (a,b){
    return a * b;
}
function bolme (a,b){
    return a / b;
}

// Input
console.log(hesab(5,6,vurma))