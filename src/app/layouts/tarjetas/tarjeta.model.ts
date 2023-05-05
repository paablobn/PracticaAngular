import { ITarjetas } from "./tarjetas.interface";

export class Tarjeta {
    private titulo: string;
    private subtitulo: string;
    private imagen: string

    public getTitulo(): string {
        return this.titulo;
    }

    public setTitulo(titulo: string): void {
        this.titulo = titulo;
    }

    public getSubtitulo(): string{
        return this.subtitulo;
    }

    public setSubtitulo(subtitulo: string): void {
        this.subtitulo = subtitulo;
    }

    public getImagen(): string{
        return this.imagen;
    }

    public setImagen(imagen: string): void {
        this.imagen = imagen;
    }

    constructor(titulo: string, subtitulo: string, imagen: string) {
        this.titulo = titulo
        this.subtitulo = subtitulo
        this.imagen = imagen
    }

}