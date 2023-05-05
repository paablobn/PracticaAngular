export class Articulo {
    private id: number
    private nombre: string
    private imagen: string
    private precio: number
    private descuento: number
    private favorito: boolean

    public getId(): number {
        return this.id;
    }

    public setId(id: number): void {
        this.id = id;
    }

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

    public getPrecio(): number {
        return this.precio;
    }

    public setPrecio(precio: number): void {
        this.precio = precio;
    }

    public getDescuento(): number {
        return this.descuento;
    }

    public setDescuento(descuento: number): void {
        this.descuento = descuento;
    }

    public isFavorito(): boolean {
        return this.favorito;
    }

    public setFavorito(favorito: boolean): void {
        this.favorito = favorito;
    }

    constructor(
        id: number,
        nombre: string,
        imagen: string,
        precio: number,
        descuento: number,
        favorito: boolean
    ) {
        this.id = id
        this.nombre = nombre
        this.imagen = imagen
        this.precio = precio
        this.descuento = descuento
        this.favorito = favorito
    }

}