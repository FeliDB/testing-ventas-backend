import {Column, Entity, PrimaryGeneratedColumn, OneToMany} from "typeorm";
import { ProductoEntity } from "./producto.entity";

@Entity()
export class MarcaEntity {
   @PrimaryGeneratedColumn()
   idMarca: number;

   @Column({ nullable: false })
   descripcion: string;

   @OneToMany(() => ProductoEntity, producto => producto.marca) // Una marca puede tener muchos productos
   productos: ProductoEntity[];


}
