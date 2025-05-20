import { IsNotEmpty, IsNumber, IsArray, ArrayMinSize } from 'class-validator';

export class CreateOrderDto {
  @IsNumber()
  clientId: number;

  @IsArray()
  @ArrayMinSize(1, { message: 'La orden debe tener al menos un producto.' })
  productosIds: number[];
}
