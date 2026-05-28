# Desafio Classificador de Nível de Herói - DIO

Este é um projeto prático desenvolvido para o desafio de lógica de programação da **Digital Innovation One (DIO)**. O objetivo principal é fixar os conceitos de variáveis, operadores, estruturas condicionais e de controle de fluxo em JavaScript.

##  Objetivo do Desafio

Criar um programa que armazene o nome e a quantidade de experiência (XP) de um herói e, em seguida, utilize uma estrutura de decisão (`if`, `else if`) para determinar e apresentar a classificação do nível do herói com base nos seguintes intervalos:

*   **Ferro:** XP menor que 1.000
*   **Bronze:** XP entre 1.001 e 2.000
*   **Prata:** XP entre 2.001 e 5.000
*   **Ouro:** XP entre 5.001 e 7.000
*   **Platina:** XP entre 7.001 e 8.000
*   **Ascendente:** XP entre 8.001 e 9.000
*   **Imortal:** XP entre 9.001 e 10.000
*   **Radiante:** XP maior ou igual a 10.001

##  Tecnologias Utilizadas

*   **JavaScript (ES6+)**: Linguagem principal utilizada para implementar a lógica de programação.
*   **Node.js**: Ambiente de execução para rodar o código JavaScript diretamente no terminal.
*   **Git & GitHub**: Ferramentas utilizadas para o controle de versão e hospedagem do código.

##  Como Executar o Projeto

Para rodar este projeto localmente na sua máquina, você precisará ter o [Node.js](https://nodejs.org/) instalado.

Navegue até a pasta do projeto:
cd desafio-classificador-nivel-heroi-dio

Execute o arquivo principal usando o Node.js:
node src/index.js

Aprendizados e Melhorias Aplicadas
Durante o desenvolvimento deste desafio, foram aplicadas boas práticas de programação que vão além do escopo básico:

Prevenção de Brechas Logísticas: Utilização correta dos operadores >= e <= para garantir que nenhum valor de XP caísse em um "limbo" entre os intervalos.

Estrutura Limpa: O uso de uma variável dedicada para o nível (nivel), evitando repetições desnecessárias de console.log dentro das estruturas condicionais.

Código Documentado: Inclusão de comentários detalhados explicando o papel de cada bloco no fluxo da aplicação.

Desenvolvido por Elton do Nascimento

---

### Como subir esse arquivo para o GitHub:
Depois de salvar o arquivo `README.md`, abra o seu terminal do VS Code e envie a atualização para o ar com estes três comandos

```bash
git add README.md
git commit -m "docs: adiciona documentação do projeto via README.md"
git push origin main

1. **Clone o repositório:**
```bash
   git clone [https://github.com/Elton-N/desafio-classificador-nivel-heroi-dio.git](https://github.com/Elton-N/desafio-classificador-nivel-heroi-dio.git)
