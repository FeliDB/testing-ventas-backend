import { Delete } from "@nestjs/common";
import {Column, DeleteDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class TipoFacturaEntity {
   @PrimaryGeneratedColumn()
   idTipoFactura: number;

   @Column()
   tipoFactura: string;

   @DeleteDateColumn({ nullable: true })
   deletedAt?: Date;
}
