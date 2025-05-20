import { Controller, Post, Body  } from '@nestjs/common';
import { ProductoService } from './producto.service';


@Controller('producto')
export class ProductoController {
    constructor(private readonly productoService: ProductoService) {}

    @Post()
    create(@Body() body: { id: number; nombre: string; precio: number; stock: number }) {
        if(!body.id || !body.nombre || !body.precio || !body.stock){
            return { error: 'Faltan datos en el body' };
        }
        if(body.precio < 0 || body.stock < 0){
            return { error: 'El precio y el stock deben ser mayores a 0' };
        }
        const { id, nombre, precio, stock } = body;
        return this.productoService.createProduct(id, nombre, precio, stock);
    }
}
