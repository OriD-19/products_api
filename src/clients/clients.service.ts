import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Client } from './client.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ClientsService {
    constructor(
        @InjectRepository(Client)
        private clientsRepository: Repository<Client>,
    ) {}

    async createClient(nombre: string, email: string): Promise<Client> {
        const nuevo = this.clientsRepository.create({nombre, email});
        return this.clientsRepository.save(nuevo);
    }

    async findAll(): Promise<Client[]> {
        return this.clientsRepository.find();
    }

    async findById(id: number): Promise<Client> {
        const client = await this.clientsRepository.findOne({where: {id}})
        if(!client) {
            throw new NotFoundException(`Cliente con ID ${id} no encontrado `)
        }
        return client
    }

    async deleteClient(id: number): Promise<void> {
        const result = await this.clientsRepository.delete(id);
        if(result.affected === 0){
            throw new NotFoundException(`Cliente con ID ${id} no encontrada`)
        }
    }
}
