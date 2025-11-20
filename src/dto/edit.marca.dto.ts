import { IsNotEmpty, IsString, MaxLength } from "class-validator";

export class EditMarcaDto {
    idMarca: number

    @IsNotEmpty({message: "El nombre no puede estar vacio"})
    @MaxLength(10, {message: "El nombre no puede tener mas de 10 caracteres"})   
    descripcion: string;
}