import { IsNotEmpty, IsString, MaxLength } from "class-validator";

export class CreatelineasDto {
    @IsString({message: "El nombre debe ser una cadena de texto"})
    @IsNotEmpty({message: "El nombre no puede estar vacio"})
    @MaxLength(15, {message: "El nombre no puede tener mas de 15 caracteres"})    
    
    descripcion: string;
}