# Desafio do Frontend Mentor | Calculadora de gorjetas

Este desafio pelo Frontend Mentor com ênfase em JavaScript consistia em desenvolver uma calculadora de gorjetas. Considerado nível júnior pela plataforma, é um ótimo desafio para se familiarizar com os fundamentos de JavaScript e melhorar o uso da lógica de programação.

## 📋 Índice

* [Visão geral](#-visão-geral)
    * [Status](#-status)
    * [O desafio](#-o-desafio)
    * [Captura de tela](#-captura-de-tela)
    * [Links](#-acesse-o-projeto)
* [Desenvolvimento](#-desenvolvimento)
    * [Tecnologias utilizadas](#-tecnologias-utilizadas)
    * [Aprendizados](#-aprendizados)
        * [Lógica](#lógica)
        * [Cálculo](#cálculo)
        * [Condições](#condições)

## 🔎 Visão geral

### ✅ Status

Projeto: Finalizado.
Readme ainda em desenvolvimento.

### 🏁 O desafio

Para a resolução deste desafio, os usuários devem ser capazes de:

* Visualizar exatamente o layout proposto de acordo com o tamanho da janela de exibição (responsividade)
* Visualizar os estados – pairar, clicar ou selecionar – nos elementos interativos para uma usabilidade adequada
* Calcular a gorjeta e o custo total da conta por pessoa

### 📷 Captura de tela

![Captura de tela do projeto](https://user-images.githubusercontent.com/72027449/170118302-e57610ac-e739-4376-b3e5-df825305e4d9.png)

### 🔗 Acesse o projeto

* [Link do projeto](https://leo-henrique.github.io/calculadora-de-gorjetas/)
* [Desafio no Frontend mentor](https://www.frontendmentor.io/challenges/tip-calculator-app-ugJNGbJUX)

## ⚙️ Desenvolvimento

### 💻 Tecnologias utilizadas

* HTML
* CSS / SASS
* Vanilla JavaScript

### 💡 Aprendizados

#### Lógica

Apesar de possuir funcionalidades simples, este é um projeto com detalhes importantes a ser considerados na hora de escrever JavaScript, que me ajudou a trabalhar minha lógica de programação. 

Comecei listando as funcionalidades do projeto por ondem de prioridade e iniciei escrevendo a função principal do projeto, que seria o cálculo que retorna o valor da gorjeta e o custo total da conta por pessoa.

#### Cálculo

O cálculo é bem simples: o valor da conta somado com a porcentagem da gorjeta dividido pelo número de pessoas.

Entretanto, um desafio interessante surge ao somar o valor da conta com a porcentagem da gorjeta, já que número da conta + número com porcentagem (como `200 + "10%"`) faz a concatenação. Para resolver esse problema, criei uma função que divide o número com a porcentagem desejada por 100 e multiplica pelo valor da conta, retornando assim o valor que deve ser somado com o número da conta.

```js
function addPercentage(percentage, bill) {
    return (percentage / 100) * bill;
}
```

#### Condições

Já que a funcionalidade principal (a função que faz o cálculo) já estava criada e isso por si só já funcionava, revi meu checklist criado anteriormente para verificar o resto das funcionalidades e percebi que faltava apenas executar a função nos eventos certos com as condições corretas para o funcionamento completo da calculadora, melhorando a usabilidade. 

Por exemplo, criar as condições necessárias para verificar se o usuário está selecionando a porcentagem da gorjeta pelos botões ou escreveu uma customizada pelo campo; criar a condição para verificar se o campo do número de pessoas é 0; criar a condição para verificar se qualquer campo contém algum caractere para então ativar o botão de redefinir e assim por diante.