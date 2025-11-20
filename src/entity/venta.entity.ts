import {Column, Entity, OneToOne, PrimaryGeneratedColumn, CreateDateColumn, OneToMany, JoinColumn, ManyToOne } from "typeorm";
import { DetalleVentaEntity } from "./detalleVenta.entity";
import { FacturaEntity } from "./factura.entity";
import { ClienteEntity } from "./cliente.entity";

@Entity()
export class VentaEntity {
   @PrimaryGeneratedColumn()
   idVenta: number;

   @CreateDateColumn({ type: 'timestamp' })
   fechaHora: Date;

  //Relacion de detalleVenta, Factura, Cliente
    @OneToMany(() => DetalleVentaEntity, detalleVenta => detalleVenta.venta)
    detalleVenta: DetalleVentaEntity[];

    @OneToOne(() => FacturaEntity)
    factura: FacturaEntity;

    @ManyToOne(() => ClienteEntity)
    @JoinColumn()
    cliente: ClienteEntity;

    @Column()
    total: number;

}