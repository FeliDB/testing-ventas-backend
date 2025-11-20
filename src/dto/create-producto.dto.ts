import { IsNotEmpty, IsString, MaxLength, Min, IsNumber } from "class-validator";

export class CreateProductoDto {
    @IsString({message: "La descripcion debe ser una cadena de texto"})
    @IsNotEmpty({message: "El descripcion no puede estar vacio"})
    @MaxLength(50, {message: "El descripcion no puede tener mas de 50 caracteres"})    
    descripcion: string;

    @IsNumber({}, {message: "La cantidad debe ser un numero"})
    @Min(0, {message:"El valor minimo de la cantidad es 0" })
    cantidad: number = 0;

    @IsNumber({}, {message: "El precio unitario debe ser un numero"})
    @Min(0, {message:"El precioUnitario minimo es 0" })
    precioUnitario: number = 0;

    @IsNumber({}, {message: "El id de marca debe ser un numero"})
    idMarca: number;

    @IsNumber({}, {each: true, message: "Cada id de proveedor debe ser un numero"})
    idProveedor: number[];

    @IsNumber({}, {message: "El id de linea debe ser un numero"})
    idLinea: number;
}