import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductsModule } from './products/products.module';
import { Producto } from './products/product.entity';
import { Comment } from './comments/comment.entity';
import { CommentsModule } from './comments/comments.module';

@Module({
    imports: [TypeOrmModule.forRoot({
        type: 'postgres',
        host: process.env.DB_HOST,
        port: 5432,
        username: 'postgres',
        password: 'suser',
        database: 'semana_3',
        // include the entities defined in the exercises
        entities: [Comment, Producto],
        synchronize: true,
    }), ProductsModule, CommentsModule],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule { }
