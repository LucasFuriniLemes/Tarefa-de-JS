
var Nome = prompt("Qual seu nome?");
var Nota1 = parseFloat(prompt("Digite sua primeira nota: "));
var Nota2 = parseFloat(prompt("Digite sua segunda nota: "));
media = (nota1+nota2)/2;
  if (media >= 7){
    alert("Parabéns " +nome+ "! você foi aprovado com média: " +media);
  } else{
    alert("Infelizmente você não foi aprovado, sua média foi: " +media);
    }