/*valor01, valor02, resultado : real
operacao : caractere

Inicio
// Seção de Comandos, procedimento, funções, operadores, etc... 
//escreva("A proposta deste programa é calcular dois valores baseados na operação de sua escolha :")
     escreva("Digite o primeiro valor : ")
     leia(valor01)
     escreva("Digite a operação (+,-,*,/) : ")
     leia (operacao)
     
     escreva("Digite o segundo valor : ")
     leia(valor02)
     
     se operacao = "+" entao
        resultado := valor01 + valor02
     senao
       se operacao = "-" entao
          resultado := valor01 - valor02
       senao
         se operacao = "*" entao
            resultado := valor01 * valor02
         senao
           se operacao = "/" entao
              resultado := valor01 / valor02
           fimse
         fimse
       fimse
     fimse
     
     escreva("O Resultado do Cálculo é : ",resultado)
     */

     var valor01, valor02, resultado, operacao 

     //Vamos criar uma função que executa o código, abaixo:

     function acaoBotao() {
        valor01 = prompt("Digite o primeiro valor : ")
        operacao = prompt("Digite a operação (+,-,*,/) : ")
        valor02 = prompt("Digite o segundo valor : ")
   
   
        if ( operacao == "+"){
           resultado = parseInt( valor01 ) + parseInt( valor02 )
        }else if( operacao == "-"){
           resultado = parseInt( valor01 ) - parseInt( valor02 )
        }else if( operacao == "*"){
           resultado = parseInt( valor01 ) * parseInt( valor02 )
        }else if( operacao == "/"){
           resultado = parseInt( valor01 ) / parseInt( valor02 )
        }
        
        document.getElementById("paragrafo").innerText = resultado    
     }
     
                
    