import { NestFactory } from '@nestjs/core';
import { AppModule, ObserveInstrument } from './app.module';
import { UsePipes, ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    instrument: ObserveInstrument,
  });

  app.useGlobalPipes(new ValidationPipe());
  await app.listen(process.env.PORT ?? 3001);
}
bootstrap();
