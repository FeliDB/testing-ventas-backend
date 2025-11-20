import { Repository } from "typeorm";
import { Injectable, ConflictException, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { ClienteEntity } from "src/entity/cliente.entity";
import { CreateProveedorDto } from "src/dto/create-proveedor.dto";
import { ProveedorEntity } from "src/entity/proveedor.entity";
import { EditProveedorDto } from "src/dto/edit.proveedor.dto";

@Injectable()
export class ProveedorRepository {
    constructor(
        @InjectRepository(ProveedorEntity)  // ⬅️ Aquí sí va
        private readonly repository: Repository<ProveedorEntity>
    ) {}

    async getProveedorRepository(): Promise<ProveedorEntity[]> {
        return await this.repository.find();
    }

    async getProveedorIDRespository(id: number): Promise<ProveedorEntity | null> {
        return await this.repository.findOneBy({ idProveedor: id });
    }

    async postProveedorRespository(createProveedorDto: CreateProveedorDto): Promise<ProveedorEntity> {

        const Proveedor = this.repository.create({ nombre: createProveedorDto.nombre });

        const codigo = 'PROV-' + Math.random().toString(36).substring(1,4).toUpperCase();

        const existeCodigo = await this.repository.findOneBy({ codigoProveedor: codigo });

        if (existeCodigo) {
            throw new ConflictException('El código de proveedor ya existe');
        }

        Proveedor.codigoProveedor = codigo;
        
        return await this.repository.save(Proveedor);
    }

    async putProveedorRepository(idProveedor, editProveedorDto: EditProveedorDto): Promise<ProveedorEntity> {
        const buscarProveedor = await this.repository.findOneBy({ idProveedor: idProveedor });
        if (!buscarProveedor) {
            throw new NotFoundException('Proveedor no encontrado');
        }

        buscarProveedor.nombre = editProveedorDto.nombre ?? buscarProveedor.nombre;
        return await this.repository.save(buscarProveedor);
    }

    async deleteProveedorRepository(id: number): Promise<void> {
        const buscarProveedor = await this.repository.findOneBy({ idProveedor: id });
        if (!buscarProveedor) {
            throw new NotFoundException('Proveedor no encontrado');
        }

        await this.repository.remove(buscarProveedor);
    }
}
