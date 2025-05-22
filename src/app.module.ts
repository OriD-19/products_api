import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ClientsModule } from './clients/clients.module';
import { Client } from './clients/client.entity';
import { ReservaController } from './reserva/reserva.controller';
import { ReservaService } from './reserva/reserva.service';
import { ReservaModule } from './reserva/reserva.module';
import { reserva } from './reserva/reserva.entity';

@Module({
  imports: [TypeOrmModule.forRoot({
    type:'postgres',
    //mis cosos
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'suser',
    database: 'semana_3',
    entities:[Client, reserva],
    synchronize: true,
  }), ClientsModule, ReservaModule],
  controllers: [AppController, ReservaController],
  providers: [AppService, ReservaService],
})

export class AppModule {}
