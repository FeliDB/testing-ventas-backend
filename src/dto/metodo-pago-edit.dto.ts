import { IsNotEmpty, IsString, Max, MaxLength } from "class-validator";

export class MetodoPagoEditDto {
    id: number
    @IsNotEmpty({message: "El nombre no puede estar vacio"})
    @IsString({message: "El nombre debe ser una cadena de texto"})
    @MaxLength(50, {message: "El nombre no puede tener mas de 50 caracteres"})
    nombre?: string
}