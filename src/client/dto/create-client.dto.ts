import { IsNotEmpty } from 'class-validator';
import { Answer } from '../../answers/answer.entity';

export class CreateClientDto {

  @IsNotEmpty()
  nombres: string;

  @IsNotEmpty()
  telefono: string;

  @IsNotEmpty()
  correo: string;

  @IsNotEmpty()
  answers: Answer[];

}


