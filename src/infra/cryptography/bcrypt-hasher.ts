import { compare, hash } from 'bcryptjs'
import { HashComparer } from '@/app/cryptography/hash-comparer'
import { HashGenerator } from '@/app/cryptography/hash-generator'

export class BcryptHasher implements HashGenerator, HashComparer {
  private HASH_SALT_LENGTH = 8

  hash(plain: string): Promise<string> {
    return hash(plain, this.HASH_SALT_LENGTH)
  }

  compare(plain: string, hashed: string): Promise<boolean> {
    return compare(plain, hashed)
  }
}
