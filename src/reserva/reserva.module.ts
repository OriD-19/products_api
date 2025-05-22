import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { reserva } from './reserva.entity';
import { ReservaService } from './reserva.service';
import { ReservaController } from './reserva.controller';

@Module({
    imports: [TypeOrmModule.forFeature([reserva])],
    providers: [ReservaService],
    controllers: [ReservaController],
    exports: [TypeOrmModule],
})
export class ReservaModule {}
