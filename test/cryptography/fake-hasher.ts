import { HashComparer } from '@/app/cryptography/hash-comparer'
import { HashGenerator } from '@/app/cryptography/hash-generator'

export class FakeHasher implements HashComparer, HashGenerator {
  async hash(plain: string) {
    return await plain.concat('-hashed')
  }

  async compare(plain: string, hash: string) {
    return (await plain.concat('-hashed')) === hash
  }
}
