import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Comment } from "src/comments/comment.entity";

@Entity()
export class Producto{

    //id, nombre, precio, stock
    // Validar que el nombre no sea vacío ● El precio sea mayor a 0 ● El stock sea un número entero positivo.
    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    nombre: string;

@Column('decimal', { precision: 10, scale: 2 })
    precio:number;

    @Column()
    stock:number;

    @OneToMany(() => Comment, (comment) => comment.producto)
    comentario: Comment[];
}
