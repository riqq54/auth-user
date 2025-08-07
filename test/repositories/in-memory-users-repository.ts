import { User } from '@/app/entities/user'
import { UsersRepository } from '@/app/repositories/users-repository'

export class InMemoryUsersRepository implements UsersRepository {
  public items: User[] = []

  async findByEmail(email: string): Promise<User | null> {
    const user = await this.items.find((item) => item.email === email)

    if (!user) {
      return null
    }

    return user
  }
  async create(user: User): Promise<void> {
    await this.items.push(user)
  }
}
