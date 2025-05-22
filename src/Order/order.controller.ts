import { Body, Controller, Post} from "@nestjs/common";
import { OrderService } from "./order.service";
import { CreateOrderDto } from "./dto/create-order.dto";
import { Order } from "./order.entity";


@Controller('orders')
export class OrderController
{
    constructor(private readonly orderservice: OrderService){}

    @Post()
    create(@Body() createOrderDto: CreateOrderDto): Promise<Order>
    {
        return this.orderservice.create(createOrderDto);
    }
}