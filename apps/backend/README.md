<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

---

# **DigitalInvitation - Backend**  

O **backend** do DigitalInvitation foi desenvolvido utilizando o **NestJS** e o **Prisma ORM**, garantindo uma estrutura escalável e robusta para gerenciar eventos e convidados.  

---

## **Tecnologias Utilizadas**  

- **Framework**: [NestJS](https://nestjs.com/)  
- **ORM**: [Prisma](https://www.prisma.io/)  
- **Linguagem**: TypeScript  
- **Banco de Dados**: SQLite

---

## **Funcionalidades Principais**  

### **1. Gerenciamento de Eventos**  
- Criação de eventos com alias únicos.  
- Validação de alias para evitar duplicidade.  
- Listagem de todos os eventos registrados.  
- Acesso seguro a eventos via ID e senha.  

### **2. Gerenciamento de Convidados**  
- Registro de convidados vinculados a eventos.  
- Suporte para número de acompanhantes.  

### **3. Navegação e Validações**  
- Recuperação de eventos por ID ou alias.  
- Validação de alias para verificar se está disponível ou pertence ao evento correto.  

---

## **Estrutura do Projeto**  

- **`EventsController`**:  
  Define as rotas para gerenciar eventos e convidados, como criação, acesso e validação.  

- **`EventPrisma`**:  
  Serviço injetável que se comunica com o banco de dados utilizando o Prisma ORM.  

---

## **Endpoints**  

### **Eventos**  
| Método | Rota                  | Descrição                                             |  
|--------|-----------------------|-------------------------------------------------------|  
| POST   | `/events`             | Salvar ou atualizar um evento.                       |  
| GET    | `/events`             | Listar todos os eventos.                             |  
| GET    | `/events/:idOrAlias`  | Buscar um evento por ID ou alias.                    |  
| GET    | `/events/validate/:alias/:id` | Validar se o alias está disponível.             |  

### **Convidados**  
| Método | Rota                           | Descrição                                         |  
|--------|--------------------------------|-------------------------------------------------|  
| POST   | `/events/:alias/guest`         | Adicionar um convidado a um evento específico.   |  

### **Acesso**  
| Método | Rota               | Descrição                                             |  
|--------|--------------------|-------------------------------------------------------|  
| POST   | `/events/access`   | Validar acesso a um evento via ID e senha.            |  

---

## **Serviços e Métodos**  

- **Eventos**:  
  - `saveEvent`: Salva um novo evento com validação de alias único.  
  - `searchAll`: Recupera todos os eventos do banco de dados.  
  - `searchById`: Recupera um evento pelo ID, com opção de trazer convidados.  
  - `searchByAlias`: Recupera um evento pelo alias, com opção de trazer detalhes adicionais.  

- **Convidados**:  
  - `saveGuest`: Adiciona um convidado a um evento específico.  

---
