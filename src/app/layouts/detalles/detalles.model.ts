export class Detalle {
    private id: number
    private imagen: string
    private titulo: string
    private precio: number
    private tallas: boolean[]

    public getId(): number {
        return this.id;
    }

    public setId(id: number): void {
        this.id = id;
    }

    public getImagen(): string {
        return this.imagen;
    }

    public setImagen(imagen: string): void {
        this.imagen = imagen;
    }

    public getTitulo(): string {
        return this.titulo;
    }

    public setTitulo(titulo: string): void {
        this.titulo = titulo;
    }

    public getPrecio(): number {
        return this.precio;
    }

    public setPrecio(precio: number): void {
        this.precio = precio;
    }

    public getTallas(): boolean[] {
        return this.tallas;
    }

    public setTallas(tallas: boolean[]): void {
        this.tallas = tallas;
    }

    constructor(
        id: number,
        imagen: string,
        titulo: string,
        precio: number,
        tallas: boolean[]
    ) {
        this.id = id
        this.imagen = imagen
        this.titulo = titulo
        this.precio = precio
        this.tallas = tallas
    }

}