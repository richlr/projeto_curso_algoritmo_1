
function acaoBotao(){
    var nome, idade, limite, contador

    limite = prompt("Digite a quantidade de vezes que vai ser verificar a idade: ")
    contador = 0
    while (contador < limite){
        nome = prompt(" Digite o nome da pessoa : ")
        idade = prompt(" Digite a idade do " + nome)
            if (idade > 18)
    
    //A diferença do escreva para o escreval é que o escreval joga o cursor para a linha de baixo.
    
        document.getElementById("paragrafo").innerText = nome + " Você é maior de idade"
        else
        document.getElementById("paragrafo").innerText = nome + " Você é menor de idade"
        
        contador++
    }


}
