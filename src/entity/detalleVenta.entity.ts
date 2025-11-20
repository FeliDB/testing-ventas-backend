import { Column, Entity, OneToOne, PrimaryGeneratedColumn, CreateDateColumn, ManyToOne, JoinColumn } from "typeorm";
import { ProductoEntity } from "./producto.entity";
import { VentaEntity } from "./venta.entity";


@Entity()
export class DetalleVentaEntity {
  @PrimaryGeneratedColumn()
  idDetalle: number;

  @ManyToOne(() => ProductoEntity)
  @JoinColumn()
  producto: ProductoEntity;


  @ManyToOne(() => VentaEntity)
  @JoinColumn({ name: 'idVenta' })
  venta: VentaEntity;


  @Column()
  cantidad: number

}
