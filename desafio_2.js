
let vitorias = 70;
let derrotas = 30;

function calcularSaldo(vitorias, derrotas) {
    return vitorias - derrotas;
}


let saldo = calcularSaldo(vitorias, derrotas);


if(saldo < 10){
    console.log("O Herói tem saldo de "+ saldo + "está no nível de Ferro")
}
else if(saldo >=11 && saldo <=20){
    console.log("O Herói tem saldo de "+ saldo + " está no nível de Bronze")
}
else if(saldo >=21 && saldo <=50){
    console.log("O Herói tem saldo de "+ saldo + " está no nível de Prata")
}
else if(saldo >=51 && saldo <=80){
    console.log("O Herói tem saldo de "+ saldo +   " está no nível de Ouro")
}
else if(saldo >=81 && saldo <=90){
    console.log("O Herói tem saldo de "+ saldo +  " está no nível de Diamante")
}
else if(saldo >=91 && saldo <=100){
    console.log("O Herói tem saldo de "+ saldo +  " está no nível de Lendário")
}
else{
    console.log("O Herói de nome " + nomeUsuario + " está no nível de Imortal")
}
