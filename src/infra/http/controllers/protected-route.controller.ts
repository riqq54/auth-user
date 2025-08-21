import { Controller, Post } from '@nestjs/common'
import { CurrentUser } from '@/infra/auth/current-user-decorator'
import { UserPayload } from '@/infra/auth/jwt.strategy'

@Controller('/protected')
export class ProtectecRouteController {
  @Post()
  handle(@CurrentUser() user: UserPayload) {
    // biome-ignore lint/suspicious/noConsole: testando
    console.log(user)

    return 'ok'
  }
}
