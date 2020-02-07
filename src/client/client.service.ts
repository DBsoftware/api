import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateClientDto } from './dto/create-client.dto';
import { GetClientFilterDto } from './dto/get-client-filter.dto';
import { ClientRepository } from './client.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { Client } from './client.entity';

@Injectable()
export class ClientService {
  constructor(
    @InjectRepository(ClientRepository)
    private clientRepository: ClientRepository,
  ) {}

  async getClients(): Promise<Client[]> {
    return this.clientRepository.getClients();
  }

  async getClientById(
    id: number,
  ): Promise<Client> {
    const found = await this.clientRepository.findOne({ where: { id } });

    if (!found) {
      throw new NotFoundException(`Task with ID "${id}" not found`);
    }

    return found;
  }

  async createClient(createClientDto: CreateClientDto ): Promise<Client> {
    return this.clientRepository.createClient(createClientDto);
  }

  async deleteClient(
    id: number
  ): Promise<void> {
    const result = await this.clientRepository.delete({ id});

    if (result.affected === 0) {
      throw new NotFoundException(`Task with ID "${id}" not found`);
    }
  }

  async updateClientStatus(
    id: number
  ): Promise<Client> {
    const task = await this.getClientById(id);
    // task.status = status;
    await task.save();
    return task;
  }
}
