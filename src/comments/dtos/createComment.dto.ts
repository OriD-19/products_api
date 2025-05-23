import { IsNotEmpty, IsNumber, IsString, Max, MaxLength, Min } from "class-validator";

export class CreateCommentDto {
    @IsString()
    @IsNotEmpty()
    @MaxLength(200)
    comentario: string;

    @IsNumber()
    @Max(5)
    @Min(1)
    calificacion: number;

    @IsNumber()
    @IsNotEmpty()
    productId: number;
}
