import { Module } from '@nestjs/common'
import { UsersRepository } from '@/app/repositories/users-repository'
import { PrismaService } from './prisma/prisma.service'
import { PrismaUsersRepository } from './prisma/repositories/prisma-users-repository'

@Module({
  providers: [
    PrismaService,
    {
      provide: UsersRepository,
      useClass: PrismaUsersRepository,
    },
  ],
  exports: [PrismaService, UsersRepository],
})
export class DatabaseModule {}
