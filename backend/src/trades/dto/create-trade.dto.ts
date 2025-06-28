import { IsString, IsNumber, IsOptional } from 'class-validator';

export class CreateTradeDto {
  @IsString()
  symbol: string;

  @IsNumber()
  entryPrice: number;

  @IsNumber()
  targetPrice: number;

  @IsNumber()
  stopLoss: number;

  @IsOptional()
  @IsString()
  notes?: string;
}
