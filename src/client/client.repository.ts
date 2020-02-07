import { Client } from './client.entity';
import { EntityRepository, Repository } from 'typeorm';
import { CreateClientDto } from './dto/create-client.dto';
import { GetClientFilterDto } from './dto/get-client-filter.dto';
import { Logger, InternalServerErrorException } from '@nestjs/common';
import { Answer } from '../answers/answer.entity';

@EntityRepository(Client)
export class ClientRepository extends Repository<Client> {
  private logger = new Logger('ClientRepository');

  async getClients(): Promise<Client[]> {
 
    try {
      return this.find();
    } catch (error) {
      this.logger.error(`Failed to get records. Filters}`, error.stack);
      throw new InternalServerErrorException();
    }
  }

  async createClient({  nombres, telefono, correo, answers} : CreateClientDto): Promise<Client> {
    const client = new Client();
    client.setClient({nombres, telefono, correo})
    client.answers = answers.map(e => {
      let a = new Answer();
      a.preguntaId = e.preguntaId
      a.respuesta = e.respuesta
      return a
    })

    try {
      await client.save();
    } catch (error) {
      this.logger.error(`Failed to create a record for user .`, error.stack);
      throw new InternalServerErrorException();
    }

    return client;
  }
}
