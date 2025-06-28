import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateTradeDto } from './dto/create-trade.dto';

@Injectable()
export class TradesService {
  constructor(private prisma: PrismaService) {}

  create(dto: CreateTradeDto) {
    return this.prisma.trade.create({ data: dto });
  }

  findAll() {
    return this.prisma.trade.findMany();
  }
}
