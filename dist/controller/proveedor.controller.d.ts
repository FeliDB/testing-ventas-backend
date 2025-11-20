import { ProveedorService } from "src/service/proveedor.service";
import { CreateProveedorDto } from "src/dto/create-proveedor.dto";
import { EditProveedorDto } from "src/dto/edit.proveedor.dto";
export declare class ProveedorController {
    private readonly proveedorService;
    constructor(proveedorService: ProveedorService);
    getProveedor(): Promise<import("../entity/proveedor.entity").ProveedorEntity[]>;
    getProveedorById(idProveedor: number): Promise<import("../entity/proveedor.entity").ProveedorEntity>;
    postProveedor(data: CreateProveedorDto): Promise<import("../entity/proveedor.entity").ProveedorEntity>;
    putProveedor(idProveedor: number, data: EditProveedorDto): Promise<import("../entity/proveedor.entity").ProveedorEntity>;
    deleteProveedor(idProveedor: number): Promise<void>;
}
