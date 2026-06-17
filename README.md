# 🏆 Desafios de Lógica de Programação - DIO

Este repositório centraliza os projetos práticos desenvolvidos para os desafios de lógica de programação da Digital Innovation One (DIO). O objetivo principal é fixar conceitos fundamentais de JavaScript e arquitetura de software.

---

## 🎮 Desafio 1: Classificador de Nível de Herói

O objetivo principal foi criar um programa que armazena o nome e a quantidade de experiência (XP) de um herói e utiliza uma estrutura de decisão para determinar sua classificação.

### 🧠 Regras de Negócio (Intervalos de XP):
* **Ferro:** XP menor que 1.000
* **Bronze:** XP entre 1.001 e 2.000
* **Prata:** XP entre 2.001 e 5.000
* **Ouro:** XP entre 5.001 e 7.000
* **Platina:** XP entre 7.001 e 8.000
* **Ascendente:** XP entre 8.001 e 9.000
* **Imortal:** XP entre 9.001 e 10.000
* **Radiante:** XP maior ou igual a 10.001

### 🛠️ Aprendizados e Melhorias Aplicadas:
* **Prevenção de Brechas Lógicas:** Utilização correta dos operadores `>=` e `<=` para garantir que nenhum valor de XP caísse em um "limbo" entre os intervalos.
* **Estrutura Limpa:** Uso de uma variável dedicada para o nível, evitando repetições desnecessárias de `console.log`.
* **Código Documentado:** Inclusão de comentários detalhados explicando o papel de cada bloco no fluxo da aplicação.

---

## ⚔️ Desafio 2: Calculadora de Partidas Rankeadas

O segundo desafio teve como objetivo praticar o uso avançado de **Funções**, **Operadores** e **Escopo de Variáveis** no JavaScript.

### 🧠 O que foi desenvolvido:
Uma função que recebe como parâmetro a quantidade de vitórias e derrotas de um jogador, calcula o saldo de partidas rankeadas e define o nível do herói com base nas regras:

* Vitórias menores que 10 = **Ferro**
* Vitórias entre 11 e 20 = **Bronze**
* Vitórias entre 21 e 50 = **Prata**
* Vitórias entre 51 e 80 = **Ouro**
* Vitórias entre 81 e 90 = **Diamante**
* Vitórias entre 91 e 100 = **Lendário**
* Vitórias maiores ou iguais a 101 = **Imortal**

---

## 💻 Tecnologias Utilizadas (No Projeto Geral)

* **JavaScript (ES6+):** Linguagem principal utilizada para implementar a lógica.
* **Node.js:** Ambiente de execução para rodar o código diretamente no terminal.
* **Git & GitHub:** Ferramentas para controle de versão e hospedagem do código.

## 🚀 Como Executar o Projeto Localmente

Para rodar este projeto na sua máquina, você precisará ter o Node.js instalado.

1. Navegue até a pasta do projeto:
   ```bash
   cd desafio-classificador-nivel-heroi-dio