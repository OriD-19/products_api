import { Client } from "src/clients/client.entity";
import { Producto } from "src/producto/producto.entity";
import { Column, CreateDateColumn, Entity, JoinTable, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Order{
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(()=> Client, (client)=> client.orders, {eager: true})
    client:Client;

    @ManyToMany(()=> Producto, {eager:true})
    @JoinTable()
    productos:Producto[];

    @CreateDateColumn()
    fechaCreacion: Date;

    @Column('decimal', {precision: 10, scale: 2})
    montoTotal: number;
}