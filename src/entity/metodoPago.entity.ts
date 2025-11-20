import {Column, DeleteDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class MetodoPagoEntity {
   @PrimaryGeneratedColumn()
   idMetodoPago: number;

   @Column()
   metodoPago: string;

   @DeleteDateColumn()
   deletedAt?: Date;
}
