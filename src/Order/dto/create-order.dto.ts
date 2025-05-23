import { IsInt, IsNumber, IsArray, ArrayMinSize } from 'class-validator';

export class CreateOrderDto {
  @IsNumber()
  clientId: number;

  @IsArray()
  @ArrayMinSize(1, { message: 'La orden debe tener al menos un producto.' })
  @IsInt({ each: true, message: 'Cada ID de producto debe ser un número entero.' })
  productosIds: number[];
}
