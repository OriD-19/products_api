import { Controller, Post, Body  } from '@nestjs/common';
import { ProductoService } from './producto.service';


@Controller('producto')
export class ProductoController {
    constructor(private readonly productoService: ProductoService) {}

@Post()
create(@Body() body: { nombre: string; precio: number; stock: number }) {
    const { nombre, precio, stock } = body;
    if (!nombre || precio === undefined || stock === undefined) {
        return { error: 'Faltan datos en el body: nombre, precio o stock' };
    }

    if (typeof precio !== 'number' || precio < 0) {
        return { error: 'El precio debe ser un número mayor o igual a 0' };
    }

    if (!Number.isInteger(stock) || stock < 0) {
        return { error: 'El stock debe ser un número entero mayor o igual a 0' };
    }

    return this.productoService.createProduct( nombre, precio, stock);
}

}
