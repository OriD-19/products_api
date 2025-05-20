import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Producto } from './producto/producto.entity';


@Module({
    imports: [TypeOrmModule.forRoot({
        type: 'postgres',
        host: process.env.DB_HOST,
        port: 5432,
        username: 'postgres',
        password: 'Jrlazo',
        database: 'semana_3',
        // include the entities defined in the exercises
        entities: [Comment, Producto],
        synchronize: true,
    }), ProductsModule],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule { }