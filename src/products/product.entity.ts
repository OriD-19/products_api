import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Comment } from "src/comments/comment.entity";

@Entity()
export class Producto {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nombre: string;

    @Column()
    precio: number;

    @Column()
    stock: number;

    @OneToMany(() => Comment, (comment) => comment.producto)
    comentario: Comment;
} 
