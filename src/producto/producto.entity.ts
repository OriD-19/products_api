import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Producto{

    //id, nombre, precio, stock
    // Validar que el nombre no sea vacío ● El precio sea mayor a 0 ● El stock sea un número entero positivo.
    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    nombre: string;

    @Column()
    precio:number;

    @Column()
    stock:number;
}
