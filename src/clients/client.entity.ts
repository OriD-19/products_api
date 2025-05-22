import { Order } from "src/Order/order.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn, Unique } from "typeorm";

@Entity()
@Unique(['email'])
export class Client{

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nombre: string;

    @Column()
    email: string;

    @OneToMany(() => Order, (order) => order.client)
    orders:Order[]
}
