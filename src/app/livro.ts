export class Livro {
    codigo: number;
    Editora: string;
    titulo: string;
    resumo: string;
    autores: string[];

    constructor(
        codigo: number = 0,
        Editora: string = '',
        titulo: string = '',
        resumo: string = '',
        autores: string[] = []
    ) {
        this.codigo = codigo;
        this.Editora = Editora;
        this.titulo = titulo;
        this.resumo = resumo;
        this.autores = autores;
    }
}