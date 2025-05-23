import { BadRequestException, Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { ClientsService } from './clients.service';
import { Client } from './client.entity';


@Controller('clients')
export class ClientsController {
    constructor(private readonly clientsService: ClientsService) { }

    @Post()
    async create(@Body() body: { nombre: string; email: string }): Promise<Client> {
        const { nombre, email } = body;

        if (!nombre || nombre.trim() === '') {
            throw new BadRequestException('El nombre no puede estar vacío');
        }
        if (!email || !this.isValidEmail(email)) {
            throw new BadRequestException('El email debe ser válido');
        }
        //vi que hay un class-validatos, pero ya llevaba casi todo, asi que nimodo
        const isUnique = await this.isEmailUnique(email);
        if (!isUnique) {
            throw new BadRequestException('El email ya está registrado por otro cliente');
        }

        return this.clientsService.createClient(nombre, email);
    }

    @Get()
    findAll(): Promise<Client[]> {
        return this.clientsService.findAll();
    }

    @Get(':id')
    findById(@Param('id') id: string): Promise<Client> {
        return this.clientsService.findById(+id);
    }

    @Delete(':id')
    delete(@Param('id') id: string): Promise<void> {
        return this.clientsService.deleteClient(+id);
    }

    private isValidEmail(email: string): boolean {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    }

    private async isEmailUnique(email: string): Promise<boolean> {
        const clients = await this.clientsService.findAll();
        return !clients.some(client => client.email === email);
    }
}


