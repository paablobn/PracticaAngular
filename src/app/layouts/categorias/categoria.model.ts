export class Categoria {
    private nombre: string
    private imagen: string

    public getNombre(): string {
        return this.nombre;
    }

    public setNombre(nombre: string): void {
        this.nombre = nombre;
    }

    public getImagen(): string {
        return this.imagen;
    }

    public setImagen(imagen: string): void {
        this.imagen = imagen;
    }

    constructor(nombre: string, imagen: string) {
        this.nombre = nombre
        this.imagen = imagen
    }


}