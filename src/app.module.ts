import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ReservaController } from './reserva/reserva.controller';
import { ReservaService } from './reserva/reserva.service';
import { ReservaModule } from './reserva/reserva.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
    imports: [TypeOrmModule.forRoot({
        type: 'postgres',
        host: process.env.DB_HOST,
        port: 5432,
        username: 'postgres',
        password: 'suser',
        database: 'semana_3',
        // include the entities defined in the exercises
        entities: [],
        synchronize: true,
    })],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule { }
