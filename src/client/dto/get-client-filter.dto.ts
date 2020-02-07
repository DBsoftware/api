import { IsOptional, IsNotEmpty } from 'class-validator';

export class GetClientFilterDto {

  @IsOptional()
  @IsNotEmpty()
  search: string;
}
