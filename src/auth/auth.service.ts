import { Injectable } from '@nestjs/common';
import { AuthCredentialsDto } from './dto/auth-credentials.dto';
import { User } from './user.entity';
import { UsersRepository } from './users.repository';

@Injectable()
export class AuthService {
  constructor(private userEntityRepository: UsersRepository) {}

  async signUp(authCredentialsDto: AuthCredentialsDto): Promise<User> {
    return this.userEntityRepository.createUser(authCredentialsDto);
  }

  async signIn(
    authCredentialsDto: AuthCredentialsDto,
  ): Promise<{ accessToken: string }> {
    return this.userEntityRepository.signIn(authCredentialsDto);
  }
}
