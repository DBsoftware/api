import { Controller, Get, Post, Body, Param, Delete, Patch, Query, UsePipes, ValidationPipe, ParseIntPipe, UseGuards, Logger } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ClientService } from './client.service';
import { CreateClientDto } from './dto/create-client.dto';
import { GetClientFilterDto } from './dto/get-client-filter.dto';
import { Client } from './client.entity';

@Controller('Client')
export class ClientController {
  private logger = new Logger('ClientController');

  constructor(private clientsService: ClientService) {}

  @Get()
  getClients(): Promise<Client[]> {
    this.logger.verbose(`retrieving all records. Filters`);
    return this.clientsService.getClients();
  }


  @Post()
  @UsePipes(ValidationPipe)
  createTask(
    @Body() createClientDto: CreateClientDto,
  ): Promise<Client> {
    this.logger.verbose(` creating a new record. Data: ${JSON.stringify(createClientDto)}`);
    return this.clientsService.createClient(createClientDto);
  }

}
