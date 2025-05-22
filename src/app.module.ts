import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Producto } from './producto/producto.entity';
import { ProductoModule } from './producto/producto.module';
import { Client } from './clients/client.entity';
import { Order } from './Order/order.entity';
import { OrderModule } from './Order/order.module';


@Module({
    imports: [TypeOrmModule.forRoot({
        type: 'postgres',
        host: process.env.DB_HOST,
        port: 5432,
        username: 'postgres',
        password: 'Jrlazo23',
        database: 'semana_3',
        // include the entities defined in the exercises
        entities: [Producto,Client, Order],
        synchronize: true,
    }), ProductoModule, OrderModule],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule { }