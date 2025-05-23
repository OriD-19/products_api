import { Body, Controller, Get, Param, ParseIntPipe, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { CommentsService } from './comments.service';
import { CreateCommentDto } from './dtos/createComment.dto';

@Controller('comments')
export class CommentsController {
    constructor(private readonly commentsService: CommentsService) { }

    @Post()
    @UsePipes(new ValidationPipe())
    createComment(@Body() createCommentDto: CreateCommentDto) {
        // validation of the content sent by the user
        const { comentario, calificacion, productId } = createCommentDto;
        return this.commentsService.create(comentario, calificacion, productId);
    }

    @Get('/products/:id')
    findAllFromProduct(@Param('id', ParseIntPipe) id: number) {
        // validation of the content sent by the user
        return this.commentsService.findAllFromProduct(id);
    }

    @Get("/products")
    findAll() {
        // validation of the content sent by the user
        return this.commentsService.findAll();
    }
}
