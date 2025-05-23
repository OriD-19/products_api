import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class reserva {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nombre: string;

    @Column()
    fechaInicio: Date;

    @Column()
    fechaFin: Date;
}