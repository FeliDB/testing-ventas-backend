import { IsNotEmpty, IsString, MaxLength } from "class-validator";

export class CreateMarcaDto {
    @IsString({message: "El nombre debe ser una cadena de texto"})
    @IsNotEmpty({message: "El nombre no puede estar vacio"})
    @MaxLength(30, {message: "El nombre no puede tener mas de 30 caracteres"})    
    
    descripcion: string;
}