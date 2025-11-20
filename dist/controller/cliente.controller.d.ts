import { EditClienteDto } from "src/dto/edit-cliente.dto";
import { ClienteService } from "../service/cliente.service";
import { CreateClienteDto } from "src/dto/create-cliente.dto";
export declare class ClienteController {
    private readonly clienteService;
    constructor(clienteService: ClienteService);
    getCliente(): Promise<import("../entity/cliente.entity").ClienteEntity[]>;
    getClienteById(idCliente: number): Promise<import("../entity/cliente.entity").ClienteEntity>;
    getClienteByDni(dni: string): Promise<import("../entity/cliente.entity").ClienteEntity | undefined>;
    postCliente(data: CreateClienteDto): Promise<import("../entity/cliente.entity").ClienteEntity>;
    putCliente(idCliente: number, data: EditClienteDto): Promise<import("../entity/cliente.entity").ClienteEntity>;
    deleteCliente(idCliente: number): Promise<void>;
}
