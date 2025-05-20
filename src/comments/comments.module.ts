import { Module } from '@nestjs/common';
import { CommentsService } from './comments.service';
import { CommentsController } from './comments.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Producto } from 'src/products/product.entity';
import { Comment } from './comment.entity';
import { ProductsModule } from 'src/products/products.module';

@Module({
    imports: [
        TypeOrmModule.forFeature([Producto, Comment]),
        ProductsModule
    ],
    controllers: [CommentsController],
    providers: [CommentsService],
})
export class CommentsModule { }
