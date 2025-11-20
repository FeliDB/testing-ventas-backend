import {Column, Entity, OneToOne, PrimaryGeneratedColumn, CreateDateColumn, JoinColumn, ManyToOne, ManyToMany, JoinTable, OneToMany } from "typeorm";
import { MarcaEntity } from "./marca.entity";
import { ProveedorEntity } from "./proveedor.entity";
import { LineaEntity } from "./linea.entity";
import { Cipher } from "crypto";
import { ProveedorProducto } from "./ProductoProveedor.entity";

@Entity()
export class ProductoEntity {
   @PrimaryGeneratedColumn()
   idProducto: number;

   @Column()
   descripcion: string;

  //  @Column({ default: 1 }) esto seria lo mismo q el stock
  //  cantidad: number;

   @Column()
   precioUnitario: number
   
   @Column({ default: 1 })
   stock: number
   
   @ManyToOne(() => MarcaEntity) //Un producto tiene una marca, pero una marca puede tener muchos productos
   @JoinColumn()
   marca: MarcaEntity;

      @OneToMany(() => ProveedorProducto, pp => pp.producto, { cascade: false })
   proveedorProductos: ProveedorProducto[];
   
   @ManyToOne(()=> LineaEntity) //Un producto tiene una linea, pero una linea puede tener muchos productos
   @JoinColumn()
   linea: LineaEntity


}
