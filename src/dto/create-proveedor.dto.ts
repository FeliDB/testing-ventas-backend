import { IsNotEmpty, IsString, MaxLength } from "class-validator";

export class CreateProveedorDto {
    @IsString({message: "El nombre debe ser una cadena de texto"})
    @IsNotEmpty({message: "El nombre no puede estar vacio"})
        
    nombre: string;
}