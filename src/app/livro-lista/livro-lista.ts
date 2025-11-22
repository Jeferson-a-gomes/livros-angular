import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Livro } from '../livro';
import { Editora } from '../editora';
import { ControleEditoraService } from '../services/controle-editora.service';
import { ControleLivrosService } from '../services/controle-livros.service';

@Component({
  selector: 'app-livro-lista',
  standalone: true,
  templateUrl: './livro-lista.html',
  styleUrls: ['./livro-lista.css'],
  imports: [CommonModule, RouterLink]
})

export class LivroLista implements OnInit {
  public editoras: Array<Editora> = [];
  public livros: Array<Livro> = [];

  constructor(
    private servEditora: ControleEditoraService,
    private servLivros: ControleLivrosService
  ) { }

  ngOnInit(): void {
    this.editoras = this.servEditora.getEditoras();
    this.livros = this.servLivros.obterLivros();
  }

  excluir = (Codigo: number): void => {
    this.servLivros.excluir(Number(Codigo));
    this.livros = this.servLivros.obterLivros();
  }

  obterNome = (Codigo: number): string => {
    return this.servEditora.getNomeEditora(String(Codigo)) || '';
  }
  incluir = (livro: Livro): void => {
    this.servLivros.incluir(livro);
    this.livros = this.servLivros.obterLivros();
  }

}