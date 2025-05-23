import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Comment } from './comments/comment.entity';
import { CommentsModule } from './comments/comments.module';
import { ClientsModule } from './clients/clients.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Client } from './clients/client.entity';
import { Producto } from './producto/producto.entity';
import { ProductoModule } from './producto/producto.module';

@Module({
    imports: [TypeOrmModule.forRoot({
        type: 'postgres',
        host: process.env.DB_HOST,
        port: 5432,
        username: 'postgres',
        password: 'suser',
        database: 'semana_3',
        // include the entities defined in the exercises
        entities: [Comment, Producto, Client],
        synchronize: true,
    }), CommentsModule, ClientsModule, ProductoModule],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule { }
