import { IsNotEmpty } from 'class-validator';

export class CreateAnswerDto {
  @IsNotEmpty()
  respuesta: string;

  @IsNotEmpty()
  preguntaId: number;

  @IsNotEmpty()
  clientId: number;
}
