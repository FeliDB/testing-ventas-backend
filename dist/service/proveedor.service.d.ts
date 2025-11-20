import { ProveedorRepository } from 'src/repository/proveedor.repository';
import { CreateProveedorDto } from 'src/dto/create-proveedor.dto';
import { EditProveedorDto } from 'src/dto/edit.proveedor.dto';
export declare class ProveedorService {
    private readonly proveedorRepository;
    constructor(proveedorRepository: ProveedorRepository);
    getProveedorService(): Promise<import("../entity/proveedor.entity").ProveedorEntity[]>;
    getProveedorByIdService(id: number): Promise<import("../entity/proveedor.entity").ProveedorEntity>;
    postProveedorService(createProveedorDto: CreateProveedorDto): Promise<import("../entity/proveedor.entity").ProveedorEntity>;
    putProveedorService(idProveedor: number, editProveedorDto: EditProveedorDto): Promise<import("../entity/proveedor.entity").ProveedorEntity>;
    deleteProveedorService(id: number): Promise<void>;
}
