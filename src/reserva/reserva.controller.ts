import { Body, Controller, Get, Post } from '@nestjs/common';
import { ReservaService } from './reserva.service';
import { reserva } from './reserva.entity';

@Controller('reserva')
export class ReservaController {
    constructor (private readonly reservaService: ReservaService) {}

    @Get()
    findAll(): Promise<reserva []>{
        return this.reservaService.findAll();
    }

    @Post()
    create(@Body() body: {nombre: string, fechaInicio: Date, fechaFin: Date}): Promise<reserva>{
        return this.reservaService.crearReserva(body.nombre, body.fechaInicio, body.fechaFin);
    }
}
