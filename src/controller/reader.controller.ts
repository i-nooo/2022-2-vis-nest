import { Controller, Get, Query } from '@nestjs/common';
import { ReaderService } from '../service/reader.service';

@Controller('/reader')
export class ReaderController {
  constructor(private readonly readerService: ReaderService) {}

  @Get('/get-file')
  async getHello(@Query('path') path: string) {
    if (!path) return 'path is required!';
    return await this.readerService.readFile(path);
  }
  @Get('/csvTojson')
  async getHi(@Query('path') path: string) {
    if (!path) return 'path is required!';
    return await this.readerService.readCsvToJSON(path);
  }
}
