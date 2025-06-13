# Gerenciador de Registros de Pessoas  
**Autor:** Guilherme Pessoa Mundim - 2222130005

Este projeto é um sistema web para **cadastrar**, **editar**, **listar** e **remover registros de pessoas**.

---

## 🚀 Funcionalidades

- **Cadastrar nova pessoa** com:
  - **Nome** (obrigatório)
  - **Email** (obrigatório)
  - **Telefone** (obrigatório)
  - **Sexo** (obrigatório)
  - **Data de nascimento** (obrigatória)
- **Listar registros existentes**
- **Editar registros**
- **Remover registros**

---

## ⚙️ Como Usar

### 1. **Clone o repositório**

```bash
git clone https://github.com/Uilherm/Projeto-Tecnologias-Web-2.git
```

---

### 2. **Instale as dependências**

#### Acesse a pasta do frontend:

```bash
cd front
npm install
```

#### Acesse a pasta do backend:

```bash
cd ../back
npm install json-server
```

---

### 3. **Inicie o servidor da API**

Na pasta `back`, execute:

```bash
npx json-server db.json 
```

---

### 4. **Inicie o frontend React**

Na pasta `front`, execute:

```bash
npm run dev
```


## ✅ Pré-requisitos

- [Node.js](https://nodejs.org/) instalado
- Navegador moderno (como Chrome, Firefox)
- Terminal para rodar os comandos
