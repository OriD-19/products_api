import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Producto } from "src/producto/producto.entity";

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
