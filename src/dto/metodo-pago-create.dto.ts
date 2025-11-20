import { IsNotEmpty, IsString, MaxLength } from "class-validator";

export class CreateMetodoPagoDto {
    @IsString({message: "El nombre debe ser una cadena de texto"})
    @IsNotEmpty({message: "El nombre no puede estar vacio"})
    @MaxLength(50, {message: "El nombre no puede tener mas de 50 caracteres"})
    nombre: string
}