import { Injectable } from '@nestjs/common';

@Injectable()
export class ProductoService {
    constructor(
        @InjectRepository(Producto)
        private productoRepository: Repository<Producto>,
    ) {}

    async createProduct( id: number, nombre: string, precio: number, stock: number): Promise<Producto> {
        const newProduct = this.productoRepository.create({ id, nombre, precio, stock });
        return this.productoRepository.save(newProduct);
    }

}
