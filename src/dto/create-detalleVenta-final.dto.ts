import { IsNotEmpty, IsNumber } from "class-validator";

export class CreateDetalleVentaFinalDto {
    @IsNotEmpty()
    @IsNumber()
    venta: number;
}