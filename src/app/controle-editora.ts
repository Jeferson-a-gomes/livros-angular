import { Injectable } from '@angular/core';
import { Editora } from './editora';

@Injectable({
  providedIn: 'root'
})
export class ControleEditora {
  Editoras: Array<Editora> = [];
  constructor() {
    this.Editoras = [
      new Editora('Addison-Wesley', 'Prentice Hall'),
      new Editora('O Rely Media', "O'Reilly Media"),
      new Editora('Packt Publishing', 'Packt Publishing'),
    ];
  }

  getEditoras(): Array<Editora> {
    return this.Editoras;
  }
  getNomeEditora(Editora: string): string {
    return this.Editoras.find(editora => editora.Editora === Editora)?.nome ?? '';
  }

  incluir(editora: Editora): void {
    this.Editoras.push(editora);
  }
  editar(editora: Editora): void {
    this.Editoras = this.Editoras.map(e => e.Editora === editora.Editora ? editora : e);
  }
  excluir(Editora: string): void {
    this.Editoras = this.Editoras.filter(e => e.Editora !== Editora);
  }
}
