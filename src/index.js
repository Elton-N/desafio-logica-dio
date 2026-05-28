// Entendendo o Desafio

/*  Agora é a sua hora de brilhar e construir um perfil de destaque
na DIO! Explore todos os conceitos explorados até aqui e replique (ou melhore, porque não?)
este projeto prático. Para isso, crie seu próprio repositório e aumente ainda mais seu
portfólio de projetos no GitHub, o qual pode fazer toda diferença em suas entrevistas técnicas 😎*/

/* Neste repositório, insira todos os links e arquivos necessários para seu projeto, seja um arquivo
de banco de dados ou um link para o template no Figma.*/

/* Dica: Se o expert forneceu um repositório Github, você pode dar um "fork" no repositório dele
para organizar suas alterações e evoluções mantendo uma referência direta ao código-fonte 
original.*/

// Instruções para entrega

// # 1️⃣ Desafio Classificador de nível de Herói

// **O Que deve ser utilizado**

/*  - Variáveis
 *  - Operadores
 *  - Laços de repetição
 *  - Estruturas de decisões. */

// ## Objetivo

/* Crie uma variável para armazenar o nome e a quantidade de experiência (XP) de um herói, 
depois utilize uma estrutura de decisão para apresentar alguma das mensagens abaixo: */

/* e XP for menor do que 1.000 = Ferro
* Se XP for entre 1.001 e 2.000 = Bronze
* Se XP for entre 2.001 e 5.000 = Prata
* Se XP for entre 5.001 e 7.000 = Ouro
* Se XP for entre 7.001 e 8.000 = Platina
* Se XP for entre 8.001 e 9.000 = Ascendente
* Se XP for entre 9.001 e 10.000= Imortal
* Se XP for maior ou igual a 10.001 = Radiante */

// ## Saída

/* Ao final deve se exibir uma mensagem:
"O Herói de nome **{nome}** está no nível de **{nivel}**". */


// variaveis:

// Armazena o nome do herói que será avaliado
let nome = "Thor"
// Armazena a quantidade de experiência (XP) do herói para definir o nível
let quantidadeXp = 1000
// Declara a variável que vai guardar o nome do nível por extenso
let nivel =""


// ESTRUTURA DE DECISÃO 

// Verifica se o XP é menor que 1000 para o nível (Ferro)
if(quantidadeXp < 1000) { // SÓ executa se for true
 nivel = "Ferro" 
}
// Verifica se o XP está entre os valores de 1000 e 2000 (Bronze)
else if ((quantidadeXp >= 1000) && (quantidadeXp <= 2000)) {
nivel = "Bronze"
}
// Verifica se o XP está entre os valores de 2001 e 5000 (Prata)
else if ((quantidadeXp >= 2001) && (quantidadeXp <= 5000)) {
nivel = "Prata"
}
// Verifica se o XP está entre os valores de 5001 e 7000 (Ouro)
else if ((quantidadeXp >= 5001) && (quantidadeXp <= 7000)) {
nivel = "Ouro"
}
// Verifica se o XP está entre os valores de 7001 e 8000 (Platina)
else if ((quantidadeXp >= 7001) && (quantidadeXp <= 8000)) {
nivel = "Platina"
}
// Verifica se o XP está entre os valores de 8001 e 9000 (Ascendente)
else if ((quantidadeXp >= 8001) && (quantidadeXp <= 9000)) {
nivel = "Ascendente"
}
// Verifica se o XP está entre os valores de 9001 e 10000 (Imortal)
else if ((quantidadeXp >= 9001) && (quantidadeXp <= 10000)) {
nivel = "Imortal"
}
// Se o XP for maior ou igual a 10001, o herói atinge o nível máximo (Radiante)
else if (quantidadeXp >= 10001) {
nivel = "Radiante"
}
// EXIBIÇÃO DO RESULTADO (SAÍDA DO CONSOLE)
// Imprime na tela a mensagem final concatenando o nome, o nível e a quantidade de XP
console.log(nome + " esta no nivel de " + nivel + " Xp") // fora d escopo