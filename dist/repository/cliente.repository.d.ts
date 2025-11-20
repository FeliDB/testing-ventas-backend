import { Repository } from "typeorm";
import { ClienteEntity } from "src/entity/cliente.entity";
import { CreateClienteDto } from "src/dto/create-cliente.dto";
import { EditClienteDto } from "src/dto/edit-cliente.dto";
export declare class ClienteRepository {
    private readonly repository;
    constructor(repository: Repository<ClienteEntity>);
    getClienteRepository(): Promise<ClienteEntity[]>;
    getClienteIDRespository(id: number): Promise<ClienteEntity | null>;
    getClienteDniRepository(dni: string): Promise<ClienteEntity | null>;
    postClienteRespository(createClienteDto: CreateClienteDto): Promise<ClienteEntity>;
    putClienteRepository(idCliente: any, editClienteDto: EditClienteDto): Promise<ClienteEntity>;
    deleteClienteRepository(id: number): Promise<void>;
}
