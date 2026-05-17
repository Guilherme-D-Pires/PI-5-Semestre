# 💊 PTI 5º Semestre — Farmácia Delivery

Projeto acadêmico desenvolvido para o PTI do 5º semestre, composto por um frontend estático em HTML, CSS e JavaScript consumindo uma API backend desenvolvida em Node.js com Express.

O sistema simula um fluxo de farmácia delivery, permitindo autenticação de usuários, consulta de farmácias e visualização de produtos. O frontend é servido pelo próprio backend, e os dados são persistidos em banco SQLite.

---

# 👥 Integrantes

- Christopher Gois Agudelo
- Gabriel Henrique Alves Raposo
- Guilherme Donelli Pires
- Guilherme Henrique Carvalho Teixeira Silva
- Mirella Anacleto das Dores
- Yan Carlos dos Santos Rodrigues

---

# 🗂 Estrutura do Projeto

```text
PTI-5semestre/
│
├── server.js
├── package.json
├── README.md
│
├── backend/
│   ├── controllers/
│   ├── db/
│   ├── media/
│   ├── routes/
│   └── data/
│       ├── schema.sql
│       ├── seed.sql
│       └── app.db
│
└── frontend/
    ├── index.html
    ├── login.html
    ├── farmacia.html
    └── ...
```

---

# 🚀 Tecnologias Utilizadas

## Backend
- Node.js
- Express
- SQLite
- CORS

## Frontend
- HTML5
- CSS3
- JavaScript
- Leaflet

---

# ⚙ Requisitos do Ambiente

Antes de executar o projeto, certifique-se de possuir:

- Node.js 18 ou superior
- npm 9 ou superior

---

# 📥 Instalação

## 1. Clone o repositório

```bash
git clone https://github.com/grupopti192-cpu/PTI-5semestre
```

## 2. Acesse a pasta do projeto

```bash
cd PTI-5semestre
```

## 3. Instale as dependências

```bash
npm install
```

Dependências instaladas:

| Pacote | Função |
|---|---|
| express | Servidor HTTP e roteamento |
| cors | Liberação de acesso entre frontend e backend |
| sqlite3 | Persistência de dados em banco SQLite |

---

# ▶ Como Executar o Projeto

Após instalar as dependências, execute:

```bash
npm start
```

O comando inicia o arquivo:

```text
server.js
```

Na primeira execução o sistema:

- Cria automaticamente o banco SQLite em:

```text
backend/data/app.db
```

- Cria as tabelas utilizando:

```text
backend/data/schema.sql
```

- Importa os dados de:

```text
backend/data/db.json
```

quando o arquivo estiver disponível.

- Caso o `db.json` não exista, utiliza:

```text
backend/data/seed.sql
```

como carga inicial padrão.

---

# 🌐 Acesso ao Sistema

Se tudo estiver correto, o terminal exibirá:

```text
http://localhost:3000
```

Abra no navegador:

```text
http://localhost:3000
```

---

# 🖥 Frontend

- O frontend não requer build.
- Os arquivos estáticos são servidos automaticamente pelo Express.
- Toda comunicação ocorre via API REST.

---

# 🔌 Principais Endpoints

## 📍 GET `/farmacias`

Retorna a lista de farmácias cadastradas no sistema.

### Resposta esperada

```json
[
  {
    "id": 1,
    "nome": "Farmácia Central",
    "endereco": "Rua Exemplo, 100",
    "telefone": "(11) 99999-9999"
  }
]
```

### Status Codes

| Código | Descrição |
|---|---|
| 200 | Sucesso ao listar farmácias |
| 500 | Erro interno do servidor |

---

## 📍 GET `/produtos`

Retorna os produtos disponíveis para consulta e compra.

### Resposta esperada

```json
[
  {
    "id": 1,
    "nome": "Dipirona 500mg",
    "preco": 12.90,
    "estoque": 20
  }
]
```

### Status Codes

| Código | Descrição |
|---|---|
| 200 | Sucesso ao listar produtos |
| 500 | Erro interno do servidor |

---

## 📍 POST `/login`

Realiza autenticação do usuário no sistema.

### Corpo da requisição

```json
{
  "email": "usuario@email.com",
  "senha": "123456"
}
```

### Resposta esperada

```json
{
  "message": "Login realizado com sucesso"
}
```

### Status Codes

| Código | Descrição |
|---|---|
| 200 | Login realizado com sucesso |
| 401 | Credenciais inválidas |
| 500 | Erro interno do servidor |

---

# 📡 Padrão de Comunicação da API

- A API utiliza o padrão REST.
- As respostas são retornadas em formato JSON.
- O backend realiza integração direta com banco SQLite.
- O frontend consome os endpoints utilizando JavaScript Fetch API.

---

# 🔒 Segurança e Validação

- Validação básica de credenciais no endpoint de login.
- Tratamento de erros no backend utilizando Express.
- Separação de rotas, controllers e persistência para melhor organização do projeto.

---

# 📄 Licença

Projeto desenvolvido exclusivamente para fins acadêmicos.
