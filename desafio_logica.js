let nomeUsuario = "ViniciusAmorim"
let xpUsuario = 10001

if(xpUsuario < 1000){
    console.log("O Herói de nome" + nomeUsuario + " está no nível de Ferro")
}
else if(xpUsuario >=1001 && xpUsuario <=2000){
    console.log("O Herói de nome" + nomeUsuario +  " está no nível de Bronze")
}
else if(xpUsuario >=2001 && xpUsuario <=5000){
    console.log("O Herói de nome " + nomeUsuario +  " está no nível de Prata")
}
else if(xpUsuario >=5001 && xpUsuario <=7000){
    console.log("O Herói de nome " + nomeUsuario +  " está no nível de Ouro")
}
else if(xpUsuario >=7001 && xpUsuario <=8000){
    console.log("O Herói de nome" + nomeUsuario +  " está no nível de Platina")
}
else if(xpUsuario >=8001 && xpUsuario <=9000){
    console.log("O Herói de nome" + nomeUsuario + " está no nível de Ascentedente")
}
else if(xpUsuario >=9001 && xpUsuario <=10000){
    console.log("O Herói de nome " + nomeUsuario +  " está no nível de Imortal ")
}
else{
    console.log("O Herói de nome " + nomeUsuario + " está no nível de Radiante")
}