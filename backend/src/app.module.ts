import { Module } from '@nestjs/common';
import { PrismaModule } from './prisma/prisma.module';
import { TradesModule } from './trades/trades.module';

@Module({
  imports: [PrismaModule, TradesModule],
})
export class AppModule {}
