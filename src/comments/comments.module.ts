import { Module } from '@nestjs/common';
import { CommentsService } from './comments.service';
import { CommentsController } from './comments.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Comment } from './comment.entity';
import { Producto } from 'src/producto/producto.entity';
import { ProductoModule } from 'src/producto/producto.module';

@Module({
    imports: [
        TypeOrmModule.forFeature([Producto, Comment]),
        ProductoModule
    ],
    controllers: [CommentsController],
    providers: [CommentsService],
})
export class CommentsModule { }
