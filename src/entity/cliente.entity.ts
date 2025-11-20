import {Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class ClienteEntity {
   @PrimaryGeneratedColumn()
   idCliente: number;

   @Column()
   nombre: string;

   @Column()
   apellido: string;

   @Column()
   dni: string;

   @Column()
   email: string;

   @Column()
   telefono: string;
}
