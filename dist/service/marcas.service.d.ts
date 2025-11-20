import { MarcasRepository } from 'src/repository/marcas.repository';
import { CreateMarcaDto } from 'src/dto/create-marca.dto';
import { EditMarcaDto } from 'src/dto/edit.marca.dto';
export declare class MarcasService {
    private readonly marcasRespository;
    constructor(marcasRespository: MarcasRepository);
    getMarcasService(): Promise<import("../entity/marca.entity").MarcaEntity[]>;
    getMarcaByIdService(id: number): Promise<import("../entity/marca.entity").MarcaEntity>;
    postMarcasService(createMarcaDto: CreateMarcaDto): Promise<import("../entity/marca.entity").MarcaEntity>;
    putMarcasService(idMarca: number, editMarcaDto: EditMarcaDto): Promise<import("../entity/marca.entity").MarcaEntity>;
    deleteMarcasService(id: number): Promise<void>;
}
