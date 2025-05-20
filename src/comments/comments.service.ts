import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Producto } from 'src/products/product.entity';
import { Repository } from 'typeorm';
import { Comment } from 'src/comments/comment.entity';

@Injectable()
export class CommentsService {

    constructor(
        @InjectRepository(Comment)
        private commentsRepository: Repository<Comment>,
        @InjectRepository(Producto)
        private productsRepository: Repository<Producto>,
    ) { }

    async create(comentario: string, calificacion: number, productId: number): Promise<Comment> {
        // check that the product exists
        const product = await this.productsRepository.findOne({
            where: {
                id: productId,
            },
        });

        if (!product) {
            throw new Error('Product not found');
        }

        const newComment = this.commentsRepository.create({
            comentario,
            calificacion,
            producto: product,
        });

        return await this.commentsRepository.save(newComment);
    }

    async findAllFromProduct(productId: number): Promise<Comment[]> {
        return await this.commentsRepository.find({
            where: {
                producto: {
                    id: productId,
                },
            },
            relations: ['producto'],
        });
    }

    async findAll(): Promise<Comment[]> {
        return await this.commentsRepository.find({
            relations: ['producto'],
        });
    }

}
