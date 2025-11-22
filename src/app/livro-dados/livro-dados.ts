import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Livro } from '../livro';
import { Editora } from '../editora';
import { ControleEditoraService } from '../services/controle-editora.service';
import { ControleLivrosService } from '../services/controle-livros.service';
@Component({
  selector: 'app-livro-dados',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './livro-dados.html',
  styleUrls: ['./livro-dados.css']
})
export class LivroDados implements OnInit {
  public livro: Livro = new Livro();
  public autoresForm: string = '';
  public editoras: Array<Editora> = [];

  constructor(
    private servEditora: ControleEditoraService,
    private servLivros: ControleLivrosService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.editoras = this.servEditora.getEditoras();
  }

  incluir = (): void => {
    this.livro.autores = this.autoresForm.split('\n').filter(autor => autor.trim() !== '');
    this.servLivros.incluir(this.livro);
    this.router.navigateByUrl('/lista');
  }

  voltar = (): void => {
    this.router.navigateByUrl('/lista');
  }
}