import { NestFactory } from '@nestjs/core'
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger'
import { apiReference } from '@scalar/nestjs-api-reference'
import { AppModule } from './app.module'
import { EnvService } from './env/env.service'

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    // logger: false
  })

  const config = new DocumentBuilder()
    .setTitle('Practice API')
    .setDescription('An API to practice concepts')
    .setVersion('1.0.0')
    .addGlobalResponse({
      status: 500,
      description: 'Internal server error',
    })
    .build()

  const documentFactory = SwaggerModule.createDocument(app, config)
  const OpenApiSpecification = app.use(
    apiReference({
      content: documentFactory,
      theme: 'kepler',
    })
  )

  SwaggerModule.setup('/api', OpenApiSpecification, documentFactory)

  const envService = app.get(EnvService)
  const port = envService.get('PORT')

  await app.listen(port)
}
bootstrap()
