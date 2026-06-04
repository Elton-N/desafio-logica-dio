
// Instruções para entrega


// # 2️⃣ Calculadora de partidas Rankeadas

/* 
Objetivo:
Crie uma função que recebe como parâmetro a quantidade de vitórias e derrotas de um jogador,
depois disso retorne o resultado para uma variável, o saldo de Rankeadas deve ser feito através
do calculo (vitórias - derrotas)

Regras de negócio:
Se vitórias for menor do que 10 = Ferro
Se vitórias for entre 11 e 20 = Bronze
Se vitórias for entre 21 e 50 = Prata
Se vitórias for entre 51 e 80 = Ouro
Se vitórias for entre 81 e 90 = Diamante
Se vitórias for entre 91 e 100 = Lendário
Se vitórias for maior ou igual a 101 = Imortal

Saída esperada:
"O Herói tem de saldo de **{saldoVitorias}** está no nível de **{nivel}**"
*/

// --- código abaixo desta linha ---

// 1. Função que recebe as vitórias e derrotas e calcula o saldo
function calcularNivel(vitorias, derrotas) {
    let saldoVitorias = vitorias - derrotas;
    let nivel = "";

    // 2. Estrutura de decisão para definir o nível baseado nas vitórias
    if (vitorias <= 10) {
        nivel = "Ferro";
    } else if (vitorias >= 11 && vitorias <= 20) {
        nivel = "Bronze";
    } else if (vitorias >= 21 && vitorias <= 50) {
        nivel = "Prata";
    } else if (vitorias >= 51 && vitorias <= 80) {
        nivel = "Ouro";
    } else if (vitorias >= 81 && vitorias <= 90) {
        nivel = "Diamante";
    } else if (vitorias >= 91 && vitorias <= 100) {
        nivel = "Lendário";
    } else if (vitorias >= 101) {
        nivel = "Imortal";
    }

    // Retorna o resultado para ser usado fora da função
    return { saldoVitorias, nivel };
}

// 3. Chamando a função e passando os valores de teste (Exemplo: 85 vitórias e 10 derrotas)
let resultadoDesafio2 = calcularNivel(91, 10);

// 4. Exibindo a mensagem final exigida no desafio
console.log(`O Herói tem de saldo de **${resultadoDesafio2.saldoVitorias}** está no nível de **${resultadoDesafio2.nivel}**`);