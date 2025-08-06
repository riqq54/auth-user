import { Module } from '@nestjs/common'
import { RegisterUserUseCase } from '@/app/use-cases/register-user'
import { DatabaseModule } from '../database/database.module'
import { CreateAccountController } from './controllers/create-account.controller'

@Module({
  imports: [DatabaseModule],
  controllers: [CreateAccountController],
  providers: [RegisterUserUseCase],
})
export class HttpModule {}
