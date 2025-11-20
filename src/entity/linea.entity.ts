import {Column, Entity, OneToOne, PrimaryGeneratedColumn, CreateDateColumn, OneToMany } from "typeorm";
import { ProductoEntity } from "./producto.entity";


@Entity()
export class LineaEntity {
   @PrimaryGeneratedColumn()
   idLinea: number;

   @Column({ nullable: false })
   descripcion: string;

   @OneToMany(() => ProductoEntity, producto => producto.linea) // Una línea puede tener muchos productos
   productos: ProductoEntity[];
}