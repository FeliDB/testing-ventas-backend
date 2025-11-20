import {Column, Entity, PrimaryGeneratedColumn, CreateDateColumn, OneToMany, ManyToOne, JoinColumn, OneToOne } from "typeorm";
import { TipoFacturaEntity } from "./tipoFactura.entity";
import { MetodoPagoEntity } from "./metodoPago.entity";
import { VentaEntity } from "./venta.entity";


@Entity()
export class FacturaEntity {
   @PrimaryGeneratedColumn()
   idFactura: number;
    
   @Column()
    total: number;

   @Column()
      impuesto: number

   @CreateDateColumn({ type: 'timestamp' })
      fechaHora: Date;

   @ManyToOne(() => TipoFacturaEntity)
   @JoinColumn()
      tipoFactura: TipoFacturaEntity;

    @ManyToOne(() => MetodoPagoEntity)
    @JoinColumn()
        metodoPago: MetodoPagoEntity;
   

   @OneToOne(() => VentaEntity)
   @JoinColumn({ name: 'idVenta' })
   venta: VentaEntity;

    
   
}
