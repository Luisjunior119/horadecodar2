/*1. Escreva um programa em que o usuário informe dois números utilizando o "prompt". Então escreva em tela o maior deles.

var num1 = parseInt(prompt('Insira aqui o primeiro número.'))
var num2 = parseInt(prompt('Insira aqui o segundo número.'))

  if (num1 > num2) { 
  alert('O maior número é: ' + num1)
}if (num2 > num1) {
  alert('O maior número é: ' + num2)
}*/

//2. Faça um programa que leia um valor informado pelo usuário e diga se o valor informado é positivo, negativo ou zero.

/*var numeroUsuario = parseInt(prompt("Coloque aqui seu número preferido"))

if (numeroUsuario > 0) {
  document.write('O número informado é positivo')
}
else if (numeroUsuario < 0) {
  document.write('O Número informado é negativo')10
}
else  {
  document.write('O Número informado tem o valor de 0')
}*/

//3. Faça um programa para ler 3 valores (considere que não serão informados valores iguais) e escrever o maior deles.
/*var valor1 = parseInt(prompt('Coloque aqui o primeiro número'))
var valor2 = parseInt(prompt('Coloque aqui o segundo número'))
var valor3 = parseInt(prompt('Coloque aqui o terceiro número'))

if ( valor1 > valor2 && valor1 > valor3) {
  alert(valor1 + ' é o maior')
} else if ( valor2 > valor1 && valor2 > valor3) {
  alert(valor2 + ' é o maior')
}if ( valor3 > valor1 && valor3 > valor2) {
  alert(valor3 + ' é o maior')
  
}*/


//4. Faça um programa que leia 3 valores informados pelo usuário (considere que não serão informados valores iguais) e escrever a soma dos 2 maiores.

/*var valor1 = parseInt(prompt("Digite o primeiro número"));
var valor2 = parseInt(prompt("Digite o segundo número"));
var valor3 = parseInt(prompt("Digite o terceiro número"));
var soma
if (valor1 > valor2 && valor2 > valor3){
  var soma = valor1 + valor2
  alert('O resultado da soma dos dois maiores números é: ' + soma);

} 
else if( valor2 > valor1 && valor3 > valor2){
  var soma = valor2 + valor3
  alert('O resultado da soma dos dois maiores números é: ' + soma);
}

if(valor3 > valor1 && valor1 > valor2){
  var soma = valor3 + valor1
  alert('O resultado da soma dos dois maiores números é: ' + soma)
}*/

/*5.  Faça um programa que leia 6 valores informados pelo usuário, calcule, exiba os números informados e escreva a média aritmética desses valores lidos.*/

/*
alert('Nos informe 6 valores')

let valor1 = parseInt(prompt('Informe seu primeiro valor'))
let valor2 = parseInt(prompt('Informe seu segundo valor'))
let valor3 = parseInt(prompt('Informe seu terceiro valor'))
let valor4 = parseInt(prompt('Informe seu quarto valor'))
let valor5 = parseInt(prompt('Informe seu quinto valor'))
let valor6 = parseInt(prompt('Informe seu sexto valor'))

let media =(valor1 + valor2 + valor3 + valor4 + valor5 + valor6) / 6

alert(`Os números informados foram:   ${valor1}, ${valor2}, ${valor3}, ${valor4}, + ${valor5}, ${valor6}. E a média aritmética é:  ${media}`)*/

/*6. Faça um programa que receba quatro valores informados pelo usuário, mas informe somente o primeiro, o último e o maior de todos eles (considere que todos os números informados serão diferentes)

alert('Nos informe 4 valores')

var valor1 = prompt('Digite aqui o primeiro número')
var valor2 = prompt('Digite aqui o segundo número')
var valor3 = prompt('Digite aqui o terceiro número')
var valor4 = prompt('Digite aqui o quarto número')

var maiorValor;

if(valor2 > valor3 && valor2 > valor1 && valor2 > valor4) {
  var maiorValor = valor2
}else  if(valor3 > valor2 && valor3 > valor1 && valor3 > valor4){
  var maiorValor = valor3
}else  if(valor4 > valor2 && valor4 > valor1 && valor4 > valor3){
  var maiorValor = valor4
}else if(valor1 > valor2 && valor1 > valor3 && valor1 > valor4)
  var maiorValor = valor1

alert(`O primeiro número é: ${valor1}, já o último informado é o: ${valor4}, por fim, o maior dentre os 4 valores é o ${maiorValor} `)*/

/*7. Faça um programa que leia 6 números que o usuário vai informar. Todos os números lidos com valor inferior a 72 devem ser somados. Escreva o valor final da soma efetuada e também todos valores que o usuário informou.
alert('Informe os números, mas eles devem ser inferiores a 72')

var number1 = parseInt(prompt('Insira aqui o 1º número'))
var number2 = parseInt(prompt('Insira aqui o 2º número'))
var number3 = parseInt(prompt('Insira aqui o 3º número'))
var number4 = parseInt(prompt('Insira aqui o 4º número'))
var number5 = parseInt(prompt('Insira aqui o 5º número'))
var number6 = parseInt(prompt('Insira aqui o 6º número'))

var limite = (number1, number2, number3, number4, number5, number6) <= 72;

var soma = (number1 + number2 + number3 + number4 + number5 + number6)


alert(`O valor final da soma é: ${soma}, e os número informados foram:  ${number1}, ${number2}, ${number3}, ${number4}, ${number5}, ${number6}.`)*/

/*8. Escreva um programa que calcule a média de quatro números informados pelo usuário, mas somente se esses números forem maiores que 0 e menores que 10. No final, se a média for maior que cinco o usuário receberá uma mensagem "Você passou no teste". Em qualquer outra situação, ele receberá uma mensagem de "tente novamente"

alert('Informe 4 números, mas eles devem ser superiores 0 e inferiores a 10')

var number1 = parseInt(prompt('Insira aqui o 1º número'))
var number2 = parseInt(prompt('Insira aqui o 2º número'))
var number3 = parseInt(prompt('Insira aqui o 3º número'))
var number4 = parseInt(prompt('Insira aqui o 4º número'))

var mediaNumber = (number1 + number2 + number3 + number4) / 4

if (mediaNumber  >= 5){  
  alert(`Você passou no teste, sua nota é: ${mediaNumber}`)
}else if(mediaNumber <= 4.9) 
alert(`Tente novamente, sua nota é: ${mediaNumber}`)*/

/*9. Escreva um programa para ler o ano de nascimento de uma pessoa e escrever uma mensagem que diga se ela poderá ou não votar este ano (não é necessário considerar o mês em que ela nasceu).*/

/*var ano = prompt('Insira aqui o ano em que você nasceu(não precisar inserir o mês)')

var condicao = (ano)


if (condicao <= 2007){
  alert(`Parabéns! Você pode votar pois nasceu em: ${condicao}`)
}else if (condicao >= 2008)
alert(`Você infelizmente não tem idade suficiente para votar, mas não fique preocupado, na próxima eleição você conseguirá participar`)*/

/*10. Tendo como entrada a altura e o sexo (codificado da seguinte forma: 1: feminino 2: masculino) de uma pessoa, construa um programa que calcule e imprima seu peso ideal, utilizando as seguintes fórmulas:

(DO JEITO ERRADO QUE EU ESTAVA FAZENDO)
var altura = parseFloat(prompt('Insira aqui a sua altura'))
var sexo = parseFloat(prompt('Qual seu gênero?'))
var peso = parseFloat(prompt('Insira aqui seu peso'))


var conta = (peso * altura) - 58
var conta2 = (peso * altura) - 44.7
var sexo2 = ('feminino')
var sexo3 = ('masculino')

if(conta){
  alert(`O peso ideal para o gênero ${sexo3} é: ${conta} `)
}else(conta2)
  alert(`O peso ideal para o gênero ${sexo2} é: ${conta2}`)
  
  (DA MANEIRA CORRETA***)
  var sexo = prompt('Qual seu gênero?');
  var altura = parseFloat(prompt('Insira aqui a sua altura'));
  var peso = parseFloat(prompt('Insira aqui seu peso'));
  if (sexo == 'feminino') {
    conta = peso * altura -44.7;
     alert(`O peso ideal para o gênero feminino é: ${conta} `)
  } else { conta = peso * altura -58; 
    alert(`O peso ideal para o gênero masculino é: ${conta} `)} */

    /*11. Uma micro calculadora
Escreva um programa para ler 2 valores inteiros informados pelo usuário e uma das seguintes operações a serem
executadas (codificada da seguinte forma: 1.Adição, 2.Subtração, 3.Divisão, 4.Multiplicação).
O programa deve calcular e escrever o resultado dessa operação sobre os dois valores lidos. Observação: Considere
que só serão lidos os valores 1, 2, 3 ou 4 para as operações

var valor1 = parseInt(prompt('Informe aqui o primeiro valor.'))
var valor2 = parseInt(prompt('Informe aqui o segundo valor.'))
var opera = parseInt(prompt('Informe a operação (1-Adição, 2-Subtração, 3-Multiplicação, 4-Divisão.'))

if((opera != 1) && (opera != 2) && (opera != 3) && (opera != 4)){
  alert(`Nós fazemos as seguintes operações: (1-Adição, 2-Subtração, 3-Multiplicação, 4-Divisão.')`)

}else if(opera === 1){
  alert(valor1 + valor2)
}else if(opera === 2){
  alert(valor1 - valor2)
}else if(opera === 3){
  alert(valor1 * valor2)
}else if(opera === 4){
  alert(valor1 / valor2)
}*/



  









        