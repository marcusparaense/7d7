//PREMISSAS
//CRIAR CALCULADORA
//OPERAÇÕES DE SOMA, SUBTRAÇÃO, MULTIPLICAÇÃO E DIVISÃO
// OPÇÃO PARA SAIR.
//SEPARAR OPERAÇÕES POR FUNÇÃO
//Q1. QUAL A OPERAÇÃO.
//Q2. QUAL PRIMEIRO NUMERO.
//Q3. QUAL SEGUNDO NUMERO.
//IMPRIME RESPOSTA.
//NOVA OPERAÇÃO OU SAIR.


//variaveis do projeto:
let numero1 = 0 //recebe o primeiro numero da operação
let numero2 = 0 //recebe o segundo numero da operação
let resultado = 0 //recebe o resultado da operação
let operacao = null //recebe qual a operação escolhida pelo usuario
let iniciar = 'sim' //recebe o valor inicial de sim para entrar no loop de execução e é atualizado na pergunta no final da função principal




//função principal de execução. recebe os loops e outras funções de validação e execução.
function calculadora() {
    while(iniciar == 'sim') {
        inicio()        
        reconheceOperacao()
        recebeNumeros()    
        executaOperacao()
        iniciar = prompt('Deseja realizar outra operação matemática? \nDigite "SIM" ou "NÃO":')   
    }   
} 

//função para solicitar e guardar numeros escolhidos pelo usuario
function recebeNumeros() {
    numero1 = parseInt(prompt('Digite o primeiro numero da operação'))
    numero2 = parseInt(prompt('Digite o segundo numero da operação'))
    console.log(typeof numero1, typeof numero2)
}

//função que valida a operação escolhida pelo usuário.
function validaOperacao() {
    switch(operacao){
        case "1":
        case "2":
        case "3":
        case "4":
            break
        default:
            alert('Opção invalida. Tente novamente')
    }
}

//função que traduz a operação escolhida para a string relativa.
function reconheceOperacao(){
    switch(operacao){
        case '1':
            operacao = 'soma'
            break
        case '2':
            operacao = 'subtracao'
            break
        case '3':
            operacao = 'multiplicacao'
            break
        case '4':
            operacao = 'divisao'
            break
        default:

    }
}

//Funções de operações matemáticas: SOMA, SUBTRAÇÃO, MULTIPLICAÇÃO E DIVISÃO.
function soma() {
    resultado = (numero1 + numero2)
    alert(`O resultado da soma de ${numero1} com ${numero2} é igual a ${resultado}`)
}

function subtracao() {
    resultado = numero1 - numero2
    alert(`O resultado da subtração do ${numero1} pelo ${numero2} é igual a ${resultado}`)
}

function multiplicacao() {
    resultado = numero1 * numero2
    alert(`O resultado da multiplicação de ${numero1} com ${numero2} é igual a ${resultado}`)
}

function divisao() {
    resultado = numero1 / numero2
    alert(`O resultado da divisão do ${numero1} pelo ${numero2} é igual a ${resultado}`)
}

//função que recebe os valores dos numeros e executa a operação escolhida pelo usuario, retornando um resultado.
function executaOperacao() {
    switch(operacao){
        case 'soma':
            soma()
            break
        case 'subtracao':
            subtracao()
            break
        case 'multiplicacao':
           multiplicacao()
           break
        case 'divisao':
            divisao()
            break
        default:
    }
}

//função de exibição da opção de operações ao usuario, guardando os valores e validando com outras funções.
function inicio(){
    while(operacao != 1 && operacao != 2 && operacao != 3 && operacao != 4 ){
        operacao = prompt('Qual operação matemática gostaria de realizar? \n Digite: \n (1) para SOMA; \n (2) para SUBTRAÇÃO; \n (3) para MULTIPLICAÇÃO; \n (4) para DIVISÃO; \n')       
        validaOperacao()        
    }    
}

//execução do código
calculadora()