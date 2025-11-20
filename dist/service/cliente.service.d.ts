import { ClienteRepository } from 'src/repository/cliente.repository';
import { CreateClienteDto } from 'src/dto/create-cliente.dto';
import { EditClienteDto } from 'src/dto/edit-cliente.dto';
export declare class ClienteService {
    private readonly clienteRepository;
    constructor(clienteRepository: ClienteRepository);
    getClienteService(): Promise<import("../entity/cliente.entity").ClienteEntity[]>;
    getClienteByIdService(id: number): Promise<import("../entity/cliente.entity").ClienteEntity>;
    getClienteByDniService(dni: string): Promise<import("../entity/cliente.entity").ClienteEntity | undefined>;
    postClienteService(createClienteDto: CreateClienteDto): Promise<import("../entity/cliente.entity").ClienteEntity>;
    putClienteService(idCliente: number, editClienteDto: EditClienteDto): Promise<import("../entity/cliente.entity").ClienteEntity>;
    deleteClienteService(id: number): Promise<void>;
}
