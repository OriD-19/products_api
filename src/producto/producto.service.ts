import { Injectable } from '@nestjs/common';
import { Producto } from './producto.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class ProductoService {
    constructor(
        @InjectRepository(Producto)
        private productoRepository: Repository<Producto>,
    ) {}

    async createProduct( nombre: string, precio: number, stock: number): Promise<Producto> {
        const newProduct = this.productoRepository.create({ nombre, precio, stock });
        return this.productoRepository.save(newProduct);
    }

}
