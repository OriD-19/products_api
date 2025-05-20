import { Producto } from "src/products/product.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Comment {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    comentario: string;

    @Column()
    calificacion: number;

    @ManyToOne(() => Producto, (product) => product.comentario)
    producto: Producto;
}
