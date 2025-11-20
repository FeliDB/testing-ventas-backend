import {
  IsNotEmpty,
  IsString,
  MaxLength,
  MinLength,
  IsEmail,
  Matches,
  IsOptional,
} from "class-validator";

export class CreateClienteDto {
  @IsString({ message: "El nombre debe ser una cadena de texto" })
  @IsNotEmpty({ message: "El nombre no puede estar vacío" })
  @MaxLength(30, { message: "El nombre no puede tener más de 30 caracteres" })
  @MinLength(2, { message: "El nombre debe tener al menos 2 caracteres" })
  nombre: string;

  @IsString({ message: "El apellido debe ser una cadena de texto" })
  @IsNotEmpty({ message: "El apellido no puede estar vacío" })
  @MaxLength(30, { message: "El apellido no puede tener más de 30 caracteres" })
  @MinLength(2, { message: "El apellido debe tener al menos 2 caracteres" })
  apellido: string;

  @IsString({ message: "El DNI debe ser una cadena de texto" })
  @IsNotEmpty({ message: "El DNI no puede estar vacío" })
  @Matches(/^\d{7,8}$/, {
    message: "El DNI debe contener solo números y tener entre 7 y 8 dígitos",
  })
  dni: string;

  @IsEmail({}, { message: "El correo electrónico no es válido" })
  @IsNotEmpty({ message: "El correo electrónico no puede estar vacío" })
  email: string;

  @IsOptional() // se puede permitir vacío
  @Matches(/^[0-9+\-\s]{6,20}$/, {
    message:
      "El teléfono solo puede contener números, espacios o guiones, y debe tener entre 6 y 20 caracteres",
  })
  telefono?: string;
}
