import { Injectable } from '@angular/core';
import { Livro } from './livro';

@Injectable({
  providedIn: 'root'
})
export class ControleLivros {
  Livros: Livro[] = [];
  constructor() {
    this.Livros = [
      new Livro(1, 'Addison-Wesley', 'Clean Code', 'Um guia de boas práticas para desenvolvimento de software.', ['Robert C. Martin']),
      new Livro(2, 'O Rely Media', 'Learning Angular', 'Um livro sobre como aprender Angular', ['Brad Dayley', 'Brendan Dayley']),
      new Livro(3, 'Packt Publishing', 'JavaScript: The Good Parts', 'Análise profunda dos melhores recursos da linguagem JavaScript.', ['Douglas Crockford']),
    ];
  }
  obterLivros(): Livro[] {
    return this.Livros;
  }
  incluir(livro: Livro): void {
    this.Livros.push(livro);
  }
  editar(livro: Livro): void {
    this.Livros = this.Livros.map(livro => livro.Editora === livro.Editora ? livro : livro);
  }
  excluir(Editora: string): void {
    this.Livros = this.Livros.filter(livro => livro.Editora !== Editora);
  }
}
