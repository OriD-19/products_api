import { Body, Controller, Get, Param, ParseIntPipe, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { CommentsService } from './comments.service';
import { CreateCommentDto } from './dtos/createComment.dto';

@Controller('comments')
export class CommentsController {
    constructor(private readonly commentsService: CommentsService) { }

    @Post(':id')
    @UsePipes(new ValidationPipe())
    createComment(@Param('id', ParseIntPipe) productId: number,
        @Body() createCommentDto: CreateCommentDto) {
        // validation of the content sent by the user
        const { comentario, calificacion } = createCommentDto;
        return this.commentsService.create(comentario, calificacion, productId);
    }

    @Get(':id')
    findAllFromProduct(@Param('id', ParseIntPipe) id: number) {
        // validation of the content sent by the user
        return this.commentsService.findAllFromProduct(id);
    }

    @Get()
    findAll() {
        // validation of the content sent by the user
        return this.commentsService.findAll();
    }
}
