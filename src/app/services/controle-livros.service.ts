import { Injectable } from '@angular/core';
import { Livro } from '../livro';

@Injectable({
    providedIn: 'root'
})
export class ControleLivrosService {
    private livros: Array<Livro> = [
        {
            codigo: 1,
            Editora: 'Addison-Wesley',
            titulo: 'Clean Code',
            resumo: 'Um guia de boas práticas para desenvolvimento de software.',
            autores: ['Robert C. Martin']
        },
        {
            codigo: 2,
            Editora: 'O Rely Media',
            titulo: 'Learning Angular',
            resumo: 'Um livro sobre como aprender Angular',
            autores: ['Brad Dayley', 'Brendan Dayley']
        },
        {
            codigo: 3,
            Editora: 'Packt Publishing',
            titulo: 'JavaScript: The Good Parts',
            resumo: 'Análise profunda dos melhores recursos da linguagem JavaScript.',
            autores: ['Douglas Crockford']
        }
    ];

    constructor() { }

    obterLivros(): Array<Livro> {
        return this.livros;
    }

    incluir(livro: Livro): void {
        const novoCodigo = this.livros.length > 0
            ? Math.max(...this.livros.map(l => l.codigo)) + 1
            : 1;

        livro.codigo = novoCodigo;
        this.livros.push(livro);
    }

    excluir(codigo: number): void {
        const index = this.livros.findIndex(l => l.codigo === codigo);
        if (index !== -1) {
            this.livros.splice(index, 1);
        }
    }
}