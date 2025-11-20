import { Repository } from "typeorm";
import { LineaEntity } from "src/entity/linea.entity";
import { CreatelineasDto } from "src/dto/create-linea.dto";
import { EditLineaDto } from "src/dto/edit-linea.dto";
export declare class LineaRepository {
    private readonly repository;
    constructor(repository: Repository<LineaEntity>);
    getLineaRepository(): Promise<LineaEntity[]>;
    getLineaIDRespository(id: number): Promise<LineaEntity | null>;
    postLineaRespository(createLineaDto: CreatelineasDto): Promise<LineaEntity>;
    putLineaRepository(idLinea: any, editLineaDto: EditLineaDto): Promise<LineaEntity>;
    deleteLineaRepository(id: number): Promise<void>;
}
