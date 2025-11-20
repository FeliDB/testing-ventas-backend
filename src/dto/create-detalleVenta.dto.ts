import { IsNotEmpty, IsNumber } from "class-validator";

export class CreateDetalleVentaDto {
    @IsNotEmpty()
    @IsNumber()
    productoId: number;

    @IsNotEmpty()
    @IsNumber()
    cantidad: number;
} 