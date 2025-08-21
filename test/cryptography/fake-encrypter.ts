import { Encrypter } from '@/app/cryptography/encrypter'

export class FakeEncrypter implements Encrypter {
  async encrypt(payload: Record<string, unknown>): Promise<string> {
    return await JSON.stringify(payload)
  }
}
