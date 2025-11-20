import { Repository } from "typeorm";
import { MarcaEntity } from "src/entity/marca.entity";
import { Injectable, ConflictException, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { CreateMarcaDto } from "../dto/create-marca.dto";
import { EditMarcaDto } from "src/dto/edit.marca.dto";

@Injectable()
export class MarcasRepository {
    constructor(
        @InjectRepository(MarcaEntity)  // ⬅️ Aquí sí va
        private readonly repository: Repository<MarcaEntity>
    ) {}

    async getMarcaRepository(): Promise<MarcaEntity[]> {
        return await this.repository.find();
    }

    async getMarcaIDRespository(id: number): Promise<MarcaEntity | null> {
        return await this.repository.findOneBy({ idMarca: id });
    }

    async postMarcaRespository(createMarcaDto: CreateMarcaDto): Promise<MarcaEntity> {
        const buscarMarca = await this.repository.findOne({ 
            where: { 
                descripcion: createMarcaDto.descripcion 
            } 
        });

        if (buscarMarca && buscarMarca.descripcion !== null) {
            throw new ConflictException('La marca ya existe');
        }

        const marca = this.repository.create({ descripcion: createMarcaDto.descripcion });
        return await this.repository.save(marca);
    }

    async putMarcaRepository(idMarca,editMarcaDto: EditMarcaDto): Promise<MarcaEntity> {
        const buscarMarca = await this.repository.findOneBy({ idMarca: idMarca });
        if (!buscarMarca) {
            throw new NotFoundException('Marca no encontrada');
        }

        buscarMarca.descripcion = editMarcaDto.descripcion ?? buscarMarca.descripcion;
        return await this.repository.save(buscarMarca);
    }

    async deleteMarcaRepository(id: number): Promise<void> {
        const buscarMarca = await this.repository.findOneBy({ idMarca: id });
        if (!buscarMarca) {
            throw new NotFoundException('Marca no encontrada');
        }

        await this.repository.remove(buscarMarca);
    }
}
