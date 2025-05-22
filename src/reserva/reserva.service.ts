import { BadRequestException, ConflictException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { reserva } from './reserva.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ReservaService {
  constructor(
    @InjectRepository(reserva)
    private reservaRepository: Repository<reserva>,
  ) {}

  async crearReserva(nombre: string, fechaInicio: Date, fechaFin: Date): Promise<reserva> {
    // Validar que la fecha de fin sea posterior a la de inicio
    if (fechaFin <= fechaInicio) {
      throw new BadRequestException('La fecha de fin debe ser posterior a la fecha de inicio.');
    }

    // Verificar si el cliente ya tiene reservas que se crucen con las nuevas fechas
    const reservas = await this.reservaRepository.find({ where: { nombre } });

    for (const r of reservas) {
      const hayConflicto =
        fechaInicio <= r.fechaFin && fechaFin >= r.fechaInicio;

      if (hayConflicto) {
        throw new ConflictException(
          `Ya existe una reserva para ${nombre} entre ${r.fechaInicio.toDateString()} y ${r.fechaFin.toDateString()}`
        );
      }
    }

    // Crear y guardar la nueva reserva
    const nuevaReserva = this.reservaRepository.create({ nombre, fechaInicio, fechaFin });
    return this.reservaRepository.save(nuevaReserva);
  }

  async findAll(): Promise<reserva[]> {
    return this.reservaRepository.find();
  }
}
