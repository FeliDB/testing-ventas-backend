import {Column, Entity, PrimaryGeneratedColumn, OneToMany, ManyToMany, JoinTable } from "typeorm";
import { ProductoEntity } from "./producto.entity";
import { ProveedorProducto } from "./ProductoProveedor.entity";

@Entity()
export class ProveedorEntity {
   @PrimaryGeneratedColumn()
   idProveedor: number;

   @Column()
   nombre: string;

   @Column({nullable: true})
   codigoProveedor: string;

   @OneToMany(() => ProveedorProducto, pp => pp.proveedor, { cascade: false })
   proveedorProductos: ProveedorProducto[];
}
