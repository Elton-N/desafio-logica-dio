/*

# 3️⃣ Escrevendo as classes de um Jogo

**O Que deve ser utilizado**
- Variáveis
- Operadores
- Laços de repetição
- Estruturas de decisões
- Funções
- Classes e Objetos

## Objetivo:
Crie uma classe genérica que represente um herói de uma aventura e que 
possua as seguintes propriedades:
- nome
- idade
- tipo (ex: guerreiro, mago, monge, ninja)

Além disso, deve ter um método chamado "atacar" que deve atender aos 
seguintes requisitos:
- Exibir a mensagem: "o {tipo} atacou usando {ataque}"
- Aonde o {tipo} deve ser concatenado o tipo que está na propriedade da classe
- E no {ataque} deve seguir uma descrição diferente conforme o tipo, 
  seguindo a tabela abaixo:

  Se mago -> no ataque exibir (usou magia)
  Se guerreiro -> no ataque exibir (usou espada)
  Se monge -> no ataque exibir (usou artes marciais)
  Se ninja -> no ataque exibir (usou shuriken)

## Saída
Ao final deve-se exibir uma mensagem:
- "o {tipo} atacou usando {ataque}"
  Ex: mago atacou usando magia
      guerreiro atacou usando espada
=============================================================================
*/

// Estrutura do  Código

class heroi {
  constructor (nome, idade, tipo) {
    this.nome = nome   // Guarda o nome (Ex: "Chuck")
    this.idade = idade // Guarda a idade (Ex: 33)
    this.tipo = tipo   // Guarda o tipo (Ex: "mago")
  }

  atacar() { // O Método => (A Ação)
    // 1. Criamos a nossa tabela de mapeamento (Dicionário)
    const ataques = {
      mago: "magia",
      guerreiro: "espada",
      monge: "artes marciais",
      ninja: "shuriken"
    }
  
    // Buscamos o ataque com base no tipo
    let ataque = ataques[this.tipo] || "um ataque básico"; // O tipo NÃO existe "arqueiro" ou está errado (O teste de segurança)

    // 3. Exibe a mensagem final formatada
    console.log(`o ${this.tipo} atacou usando ${ataque}`);
  }
} 

// ==========================================
//  OS PARÂMETROS: Testando os Hérois
// ==========================================

// 1. Criando um mago (Nome: "Chuck", Idade: 33, Tipo: "mago")
let meuHeroi = new heroi("Chuck", 33, "mago");
meuHeroi.atacar(); // Vai exibir: o mago atacou usando magia

// 2. Criando um guerreiro (Nome: "Arthur", Idade: 25, Tipo: "guerreiro")
let heroi2 = new heroi("Arthur", 25, "guerreiro");
heroi2.atacar(); // Vai exibir: o guerreiro atacou usando espada

// 3. Criando um monge (Nome: "thor", Idade: 19, Tipo: "monge")
let heroi3 = new heroi("Thor", 19, "monge");
heroi3.atacar(); // Vai exibir: o monge atacou usando artes marciais

// 4. Criando um ninja (Nome: "Shadow", Idade: 19, Tipo: "ninja")
let heroi4 = new heroi("Shadow", 20, "ninja");
heroi4.atacar(); // Vai exibir: o ninja atacou usando shuriken
