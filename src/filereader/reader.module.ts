import { Module } from '@nestjs/common';
import { FileReaderController } from './reader.controller';
import { FileReaderService } from './reader.service';

@Module({
  imports: [],
  controllers: [FileReaderController],
  providers: [FileReaderService],
})
export class FileAppModule {}
