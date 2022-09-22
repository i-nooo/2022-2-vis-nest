import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
// import { FileAppModule } from './filereader/reader.module';

async function bootstrap() {
  const portNum = 3001;
  const app = await NestFactory.create(AppModule);
  await app.listen(portNum);
}
bootstrap();
