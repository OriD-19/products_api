import { Module } from "@nestjs/common";
import { TypeOrmModule } from '@nestjs/typeorm';
import { OrderService } from './order.service';
import { OrderController } from './order.controller';
import { Client } from '../clients/client.entity';
import { Producto } from '../producto/producto.entity';
import { Order } from "./order.entity.spec";

@Module
({
    imports: [TypeOrmModule.forFeature([Order, Client, Producto])],
  providers: [OrderService],
  controllers: [OrderController],
})

export class OrderModule{}