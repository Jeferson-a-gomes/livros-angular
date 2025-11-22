# LivrosAngular – Catálogo de Livros (Projeto DGT2809) 

## 🎯 Visão Geral  
Esse projeto é parte do Trabalho Prático da disciplina **Aprofundamento em Desenvolvimento Front-End**. Seu objetivo é construir uma aplicação Angular para cadastro, listagem e exclusão de livros, utilizando conceitos de componentes, serviços injetáveis, formulários e roteamento.

---

## 🧰 Tecnologias Utilizadas

| Tecnologia             | Versão / Observações                      |
|------------------------|-------------------------------------------|
| Angular CLI            | Conforme especificado no repositório :contentReference[oaicite:0]{index=0} |
| TypeScript             |                                           |
| Bootstrap (CSS)        | Para estilização dos formulários e tabelas |
| Angular Router         | Para navegação entre páginas              |
| Angular Forms (FormsModule ou Forms) | Para binding de dados nos formulários |

---

## 🚀 Para executar meu Projeto

**1. Clonar meu repositório**:
   git clone https://github.com/Jeferson-a-gomes/livros-angular.git

**Entre na pasta do projeto**:

cd livros-angular


**Instale as dependências**:

npm install


**Execute o servidor de desenvolvimento**:

ng serve


**Abra no navegador**:

http://localhost:4200


**A aplicação deverá recarregar automaticamente quando você fizer alterações no código.**


**🧩 Estrutura do meuProjeto**
livros-angular/
├── src/
│   ├── app/
│   │   ├── livro-lista/           ← componente de listagem de livros
│   │   ├── livro-dados/           ← componente de cadastro/edição de livro
│   │   ├── controle-livros.service.ts
│   │   ├── controle-editora.service.ts
│   │   ├── livro.ts                ← modelo da entidade Livro
│   │   ├── editora.ts              ← modelo da entidade Editora
│   │   ├── app.routes.ts           ← configuração de rotas
│   │   ├── app.component.ts        ← componente raiz (menu + outlet)
│   ├── index.html
│   ├── styles.css
│   └── main.ts                     ← bootstrap da aplicação
├── angular.json
├── package.json
└── README.md


**🧠 Funcionalidades Implementadas**

**Listagem de livros (código, título, resumo, autores, editora)**
**Exclusão de livro existente**
**Formulário de cadastro de livro (título, resumo, editora selecionável, autores múltiplos)**
**Navegação entre as rotas “lista” e “dados”**
**Utilização de serviços para manter os dados em memória**


**🔧 Rotas Principais**
Caminho URL	Componente	Descrição
/lista	LivroListaComponent	Página de listagem de livros
/dados	LivroDadosComponent	Página de cadastro de novo livro
/ (vazio)	Redireciona para /lista	Rota padrão


**🧪 Casos de Uso Esperados**

Ao acessar a aplicação, deve-se ver a lista de livros cadastrados.
Clicando em “Cadastro” (ou rota /dados), abrir formulário para novo livro.
O formulário deve exigir preenchimento válido (campos obrigatórios).
Ao submeter o formulário, o livro é adicionado e redirecionado para a lista.
Na lista, ao clicar “Excluir” próximo a um livro, este deve ser removido da lista.


**📝 Observações**

Os dados (editoras e livros) foram mantidos em memória (sem back end).
Caso use Angular 17+ com componentes standalone, pode não haver AppModule.
Verifique se o main.ts está usando bootstrapApplication com provideRouter apontando para app.routes.ts.


**Aluno: Jeferson Augusto Gomes**

**Disciplina: Aprofundamento em Desenvolvimento Front-End**

**Instituição | ANO: Estácio | 2025**