import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
const cors = require('cors');


async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(cors({
    origin: 'http://localhost:3001',
    methods: ['GET', 'POST'],
    credentials: true
  }));
  const options = new DocumentBuilder()
    .setTitle('Task Manager API')
    .setDescription('API documentation for the Task Manager application')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api', app, document);
  await app.listen(3000);
}
bootstrap();