import { Injectable } from '@angular/core';
import { Editora } from '../editora';

@Injectable({
    providedIn: 'root'
})
export class ControleEditoraService {
    private editoras: Array<Editora> = [
        { Editora: 'Addison-Wesley', nome: 'Prentice Hall' },
        { Editora: 'O Rely Media', nome: "O'Reilly Media" },
        { Editora: 'Packt Publishing', nome: 'Packt Publishing' }
    ];

    constructor() { }

    getEditoras(): Array<Editora> {
        return this.editoras;
    }

    getNomeEditora(Editora: string): string {
        const editora = this.editoras.find(e => e.Editora === Editora);
        return editora?.nome ?? '';
    }
}