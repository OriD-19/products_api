import { Module } from '@nestjs/common';
import { ProductsService } from './products.service';
import { ProductsController } from './products.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Producto } from './product.entity';

@Module({
    imports: [
        TypeOrmModule.forFeature([Producto]),

    ],
    controllers: [ProductsController],
    providers: [ProductsService],
    exports: [TypeOrmModule],
})
export class ProductsModule { }
