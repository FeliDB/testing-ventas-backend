import { CreatelineasDto } from 'src/dto/create-linea.dto';
import { EditLineaDto } from 'src/dto/edit-linea.dto';
import { LineaRepository } from 'src/repository/linea.repository';
export declare class LineaService {
    private readonly lineaRespository;
    constructor(lineaRespository: LineaRepository);
    getLineasService(): Promise<import("../entity/linea.entity").LineaEntity[]>;
    getLineaByIdService(id: number): Promise<import("../entity/linea.entity").LineaEntity>;
    postLineasService(createlineasDto: CreatelineasDto): Promise<import("../entity/linea.entity").LineaEntity>;
    putLineasService(idlineas: number, editlineasDto: EditLineaDto): Promise<import("../entity/linea.entity").LineaEntity>;
    deleteLineasService(id: number): Promise<void>;
}
