import { IsNotEmpty, IsString, MaxLength, Min } from "class-validator";

export class EditProductoDto {
    idProducto: number

    @IsString({message: "La descripcion debe ser una cadena de texto"})
    @IsNotEmpty({message: "El descripcion no puede estar vacio"})
    @MaxLength(15, {message: "El descripcion no puede tener mas de 15 caracteres"})    
    
    descripcionProducto: string;

    // @Min(0, {message:"El valor minimo de la cantidad es 0" })
    // cantidad: number 

    @Min(0, {message:"El precioUnitario minimo de la cantidad es 0" })
    precioUnitario: number = 0

    @Min(0, {message:"El stock minimo de la cantidad es 0" })
    stock: number = 0

    idMarca: number
    idProveedor: number
    idLinea: number
}