import { MarcasService } from "src/service/marcas.service";
import { CreateMarcaDto } from "src/dto/create-marca.dto";
import { EditMarcaDto } from "src/dto/edit.marca.dto";
export declare class MarcasController {
    private readonly marcaService;
    constructor(marcaService: MarcasService);
    getMarcas(): Promise<import("../entity/marca.entity").MarcaEntity[]>;
    getMarcaById(idMarca: number): Promise<import("../entity/marca.entity").MarcaEntity>;
    postMarcas(data: CreateMarcaDto): Promise<import("../entity/marca.entity").MarcaEntity>;
    putMarcas(idMarca: number, data: EditMarcaDto): Promise<import("../entity/marca.entity").MarcaEntity>;
    deleteMarcas(idMarca: number): Promise<void>;
}
