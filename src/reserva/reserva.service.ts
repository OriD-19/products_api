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
    if (fechaFin < fechaInicio) {
      throw new BadRequestException('La fecha de fin debe ser posterior a la fecha de inicio.');
    }
    
    const reservas = await this.reservaRepository.find({ where: { nombre } });

    // Aseguramos que las fechas son objetos Date reales
    const nuevaInicio = new Date(fechaInicio);
    const nuevaFin = new Date(fechaFin);

    for (const r of reservas) {
      const existenteInicio = new Date(r.fechaInicio);
      const existenteFin = new Date(r.fechaFin);

      const hayConflicto =
        nuevaInicio <= existenteFin && nuevaFin >= existenteInicio;

      if (hayConflicto) {
        throw new ConflictException(
          `Ya existe una reserva para ${nombre} entre ${existenteInicio.toDateString()} y ${existenteFin.toDateString()}`
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
