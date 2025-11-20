import { Repository } from "typeorm";
import { MarcaEntity } from "src/entity/marca.entity";
import { CreateMarcaDto } from "../dto/create-marca.dto";
import { EditMarcaDto } from "src/dto/edit.marca.dto";
export declare class MarcasRepository {
    private readonly repository;
    constructor(repository: Repository<MarcaEntity>);
    getMarcaRepository(): Promise<MarcaEntity[]>;
    getMarcaIDRespository(id: number): Promise<MarcaEntity | null>;
    postMarcaRespository(createMarcaDto: CreateMarcaDto): Promise<MarcaEntity>;
    putMarcaRepository(idMarca: any, editMarcaDto: EditMarcaDto): Promise<MarcaEntity>;
    deleteMarcaRepository(id: number): Promise<void>;
}
