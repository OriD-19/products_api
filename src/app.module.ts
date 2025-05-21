import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Producto } from './producto/producto.entity';
import { ProductoModule } from './producto/producto.module';


@Module({
    imports: [TypeOrmModule.forRoot({
        type: 'postgres',
        host: process.env.DB_HOST,
        port: 5432,
        username: 'postgres',
        password: 'Jrlazo23',
        database: 'semana_3',
        // include the entities defined in the exercises
        entities: [Producto],
        synchronize: true,
    }), ProductoModule],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule { }