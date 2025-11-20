import { LineaService } from "src/service/linea.service";
import { CreatelineasDto } from "src/dto/create-linea.dto";
import { EditLineaDto } from "src/dto/edit-linea.dto";
export declare class LineasController {
    private readonly Lineaservice;
    constructor(Lineaservice: LineaService);
    getLineas(): Promise<import("../entity/linea.entity").LineaEntity[]>;
    getMarcaById(idLinea: number): Promise<import("../entity/linea.entity").LineaEntity>;
    postLineas(data: CreatelineasDto): Promise<import("../entity/linea.entity").LineaEntity>;
    putLineas(idLinea: number, data: EditLineaDto): Promise<import("../entity/linea.entity").LineaEntity>;
    deleteLineas(idMarca: number): Promise<void>;
}
