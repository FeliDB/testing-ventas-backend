import { Repository } from "typeorm";
import { Injectable, ConflictException, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { ClienteEntity } from "src/entity/cliente.entity";
import { CreateClienteDto } from "src/dto/create-cliente.dto";
import { EditClienteDto } from "src/dto/edit-cliente.dto";

@Injectable()
export class ClienteRepository {
    constructor(
        @InjectRepository(ClienteEntity)  // ⬅️ Aquí sí va
        private readonly repository: Repository<ClienteEntity>
    ) {}

    async getClienteRepository(): Promise<ClienteEntity[]> {
        return await this.repository.find();
    }

    async getClienteIDRespository(id: number): Promise<ClienteEntity | null> {
        return await this.repository.findOneBy({ idCliente: id });
    }

    async getClienteDniRepository(dni: string): Promise<ClienteEntity | null> {
        return await this.repository.findOneBy({ dni: dni });
    }

    async postClienteRespository(createClienteDto: CreateClienteDto): Promise<ClienteEntity> {
        const buscarCliente = await this.repository.findOneBy({ dni: createClienteDto.dni });

        if (buscarCliente) {
            throw new ConflictException('El cliente ya existe');
        }

        const cliente = this.repository.create({ nombre: createClienteDto.nombre, apellido:createClienteDto.apellido, dni: createClienteDto.dni, email: createClienteDto.email, telefono: createClienteDto.telefono });
        return await this.repository.save(cliente);
    }

    async putClienteRepository(idCliente, editClienteDto: EditClienteDto): Promise<ClienteEntity> {
        const buscarCliente = await this.repository.findOneBy({ idCliente: idCliente });
        if (!buscarCliente) {
            throw new NotFoundException('Cliente no encontrado');
        }

        buscarCliente.nombre = editClienteDto.nombre ?? buscarCliente.nombre;
        buscarCliente.apellido = editClienteDto.apellido ?? buscarCliente.apellido;
        buscarCliente.dni = editClienteDto.dni ?? buscarCliente.dni;
        buscarCliente.email = editClienteDto.email ?? buscarCliente.email;
        buscarCliente.telefono = editClienteDto.telefono ?? buscarCliente.telefono;
        return await this.repository.save(buscarCliente);
    }

    async deleteClienteRepository(id: number): Promise<void> {
        const buscarCliente = await this.repository.findOneBy({ idCliente: id });
        if (!buscarCliente) {
            throw new NotFoundException('Cliente no encontrado');
        }

        await this.repository.remove(buscarCliente);
    }
}
