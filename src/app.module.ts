import { Module } from '@nestjs/common';

import { ReaderController } from './controller/reader.controller';
import { ReaderService } from './service/reader.service';

@Module({
  imports: [],
  controllers: [ReaderController],
  providers: [ReaderService],
})
export class AppModule {}
