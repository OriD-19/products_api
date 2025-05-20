import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ClientsModule } from './clients/clients.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Client } from './clients/client.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'suser',
      database: 'semana_3',
      entities: [reserva],
      synchronize: true,
    }),
  ],
  imports: [TypeOrmModule.forRoot({
    type:'postgres',
    //mis cosos
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: '1234',
    database: 'semana_3',
    entities:[Client],
    synchronize: true,
  }), ClientsModule],
  controllers: [AppController],
  providers: [AppService],
})

export class AppModule {}
