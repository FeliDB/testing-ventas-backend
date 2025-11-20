import {Column, Entity, OneToOne, PrimaryGeneratedColumn, CreateDateColumn, JoinColumn, ManyToOne, ManyToMany, JoinTable, OneToMany } from "typeorm";
import { ProveedorEntity } from "./proveedor.entity";
import { ProductoEntity } from "./producto.entity";

@Entity('proveedor_producto')
export class ProveedorProducto {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => ProveedorEntity, proveedor => proveedor.proveedorProductos, { onDelete: 'CASCADE', nullable: false })
  @JoinColumn({ name: 'id_proveedor' })
  proveedor: ProveedorEntity;

  @ManyToOne(() => ProductoEntity, producto => producto.proveedorProductos, { onDelete: 'CASCADE', nullable: false })
  @JoinColumn({ name: 'id_producto' })
  producto: ProductoEntity;

  @Column({ name: 'codigo_proveedor', length: 50, nullable: true })
  codigoProveedor: string;
}
