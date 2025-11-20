import { Repository } from "typeorm";
import { CreateProveedorDto } from "src/dto/create-proveedor.dto";
import { ProveedorEntity } from "src/entity/proveedor.entity";
import { EditProveedorDto } from "src/dto/edit.proveedor.dto";
export declare class ProveedorRepository {
    private readonly repository;
    constructor(repository: Repository<ProveedorEntity>);
    getProveedorRepository(): Promise<ProveedorEntity[]>;
    getProveedorIDRespository(id: number): Promise<ProveedorEntity | null>;
    postProveedorRespository(createProveedorDto: CreateProveedorDto): Promise<ProveedorEntity>;
    putProveedorRepository(idProveedor: any, editProveedorDto: EditProveedorDto): Promise<ProveedorEntity>;
    deleteProveedorRepository(id: number): Promise<void>;
}
