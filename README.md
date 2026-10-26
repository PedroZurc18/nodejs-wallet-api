#  Wallet API (PoC)

Esta é uma Prova de Conceito de uma API backend para um sistema de carteira. O objetivo principal deste projeto é demonstrar a estruturação de uma API, conectada a um banco de dados relacional e rodando em um ambiente isolado via Docker.

## Tecnologias Utilizadas

* **Node.js & NestJS:** Framework principal para estruturação escalável da API.
* **TypeScript:** Tipagem estática para maior segurança e prevenção de bugs.
* **PostgreSQL:** Banco de dados relacional.
* **MikroORM (v5):** ORM escolhido pela sua excelente integração com NestJS. Foi utilizada a versão 5 para garantir estabilidade de dependências no ambiente atual.
* **Docker & Docker Compose:** Containerização da infraestrutura do banco de dados.

## Decisões de Arquitetura

O projeto foi construído inspirado em princípios de **Domain-Driven Design (DDD)** e separação de responsabilidades:
1. **Controller (`wallet.controller.ts`):** Atua apenas como a porta de entrada, recebendo as requisições HTTP e repassando para o Service.
2. **Service (`wallet.service.ts`):** Orquestra o fluxo de dados, buscando informações no banco e coordenando as ações.
3. **Entity (`player.entity.ts`):** Protege as regras de negócio vitais. A lógica que impede um depósito negativo, por exemplo, vive encapsulada dentro da própria entidade do Jogador, garantindo que o estado da carteira nunca fique inconsistente.

## Como Executar o Projeto Localmente

**Pré-requisitos:** Node.js (LTS) e Docker Desktop instalados.

1. Clone o repositório e acesse a pasta do projeto.
2. Suba a infraestrutura do banco de dados em segundo plano:
   ```bash
   docker-compose up -d

3. Instale as dependências (utilizando a flag de estabilidade para o MikroORM):
   ```bash
   npm install --legacy-peer-deps
   
4. Inicie o servidor de desenvolvimento:
   ```bash
   npm run start:dev
