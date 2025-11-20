import { IsNotEmpty, IsString, IsArray, ArrayNotEmpty, IsNumber, ValidateNested, IsObject } from "class-validator";
import { Type } from "class-transformer";
import { CreateDetalleVentaDto } from "./create-detalleVenta.dto";
import { CreateFacturaDto } from "./create-factura.dto";

export class CreateVentaDto {

    @IsArray({message: "idDetalle debe ser un arreglo"})
    @ArrayNotEmpty({message: "El detalle de la venta (idDetalle) no puede estar vacío"})
    @ValidateNested({ each: true })
    @Type(() => CreateDetalleVentaDto)
    detalles: CreateDetalleVentaDto[]
    
    @Type(() => CreateFacturaDto)
    factura: CreateFacturaDto

    @IsNumber({}, {message: "El idCliente debe ser un número"})
    idCliente: number
}