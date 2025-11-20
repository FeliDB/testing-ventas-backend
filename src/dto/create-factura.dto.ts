import { IsNotEmpty, IsNumber } from "class-validator";

export class CreateFacturaDto {
    @IsNumber({}, {message: "El total debe ser un número"})
    @IsNotEmpty({message: "El total no puede estar vacío"})
    total: number;
    
    @IsNumber({}, {message: "El idTipoFactura debe ser un número"})
    @IsNotEmpty({message: "El idTipoFactura no puede estar vacío"})
    idTipoFactura: number;
    
    @IsNumber({}, {message: "El idMetodoPago debe ser un número"})
    @IsNotEmpty({message: "El idMetodoPago no puede estar vacío"})
    idMetodoPago: number;

    @IsNumber({}, {message: "El impuesto debe ser un número"})
    @IsNotEmpty({message: "El impuesto no puede estar vacío"})
    impuesto: number
}