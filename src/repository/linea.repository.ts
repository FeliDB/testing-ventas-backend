import { Repository } from "typeorm";
import { MarcaEntity } from "src/entity/marca.entity";
import { Injectable, ConflictException, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { CreateMarcaDto } from "../dto/create-marca.dto";
import { EditMarcaDto } from "src/dto/edit.marca.dto";


import { LineaEntity } from "src/entity/linea.entity";
import { CreatelineasDto } from "src/dto/create-linea.dto";
import { EditLineaDto } from "src/dto/edit-linea.dto";

@Injectable()
export class LineaRepository {
    constructor(
        @InjectRepository(LineaEntity)  // ⬅️ Aquí sí va
        private readonly repository: Repository<LineaEntity>
    ) {}

    async getLineaRepository(): Promise<LineaEntity[]> {
        return await this.repository.find();
    }

    async getLineaIDRespository(id: number): Promise<LineaEntity | null> {
        return await this.repository.findOneBy({ idLinea: id });
    }

    async postLineaRespository(createLineaDto: CreatelineasDto): Promise<LineaEntity> {
        const buscarLinea = await this.repository.findOne({ 
            where: { 
                descripcion: createLineaDto.descripcion 
            } 
        });

        if (buscarLinea && buscarLinea.descripcion !== null) {
            throw new ConflictException('La Linea ya existe');
        }

        const Linea = this.repository.create({ descripcion: createLineaDto.descripcion });
        return await this.repository.save(Linea);
    }

    async putLineaRepository(idLinea, editLineaDto: EditLineaDto): Promise<LineaEntity> {
        const buscarLinea = await this.repository.findOneBy({ idLinea: idLinea });
        if (!buscarLinea) {
            throw new NotFoundException('Linea no encontrada');
        }

        buscarLinea.descripcion = editLineaDto.descripcion ?? buscarLinea.descripcion;
        return await this.repository.save(buscarLinea);
    }

    async deleteLineaRepository(id: number): Promise<void> {
        const buscarLinea = await this.repository.findOneBy({ idLinea: id });
        if (!buscarLinea) {
            throw new NotFoundException('Linea no encontrada');
        }

        await this.repository.remove(buscarLinea);
    }
}
