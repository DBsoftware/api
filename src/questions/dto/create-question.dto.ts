import { IsNotEmpty } from 'class-validator';

export class CreateQuestionDto {
  @IsNotEmpty()
  pregunta: string;

  @IsNotEmpty()
  orden: number;

  @IsNotEmpty()
  activa: boolean;

}
