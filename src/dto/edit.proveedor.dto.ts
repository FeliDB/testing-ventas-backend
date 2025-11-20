import { IsNotEmpty, IsString, MaxLength } from "class-validator";

export class EditProveedorDto {
    idProveedor: number

    @IsNotEmpty({message: "El nombre no puede estar vacio"})
    nombre: string;
}