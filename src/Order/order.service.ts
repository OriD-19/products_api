import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Order } from "./order.entity";
import { Repository, In } from "typeorm";
import { Client } from "src/clients/client.entity";
import { Producto } from "src/producto/producto.entity";
import { CreateOrderDto } from "./dto/create-order.dto";



@Injectable()
export class OrderService {
    constructor(
        @InjectRepository(Order)
        private readonly orderRepository: Repository<Order>,
        @InjectRepository(Client)
        private readonly clientRepository: Repository<Client>,
        @InjectRepository(Producto)
        private readonly productoRepository: Repository<Producto>,
    ) { }

    async create(createOrderDto: CreateOrderDto): Promise<Order> {
        const { clientId, productosIds } = createOrderDto;

        const client = await this.clientRepository.findOne({ where: { id: clientId } });
        if (!client) {
            throw new NotFoundException(`Cliente con ID ${clientId} no encontrado`);
        }

        const productos = await this.productoRepository.findBy({
            id: In(productosIds),
        });
        
        if (productos.length === 0) {
            throw new NotFoundException(`No se encontraron productos con los IDs proporcionados`);
        }

        const montoTotal = productos.reduce((sum, prod) => sum + Number(prod.precio), 0);

        const order = this.orderRepository.create(
            {
                client,
                productos,
                montoTotal,
            }
        );

        return this.orderRepository.save(order);
    }
}