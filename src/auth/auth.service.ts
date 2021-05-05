import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { CreateUserDto } from '../users/dto/create-user.dto';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private userService: UsersService,
    private jwtService: JwtService,
  ) {}
  async registration(dto: CreateUserDto) {
    const candidate = this.userService.findUserByEmail(dto.email);

    if (candidate) {
      new HttpException('this is user exist', HttpStatus.CONFLICT);
    }

    const hashPassword = await bcrypt.hash(dto.password, 7);
    const user = await this.userService.create({
      ...dto,
      password: hashPassword,
    });

    return this.generateToken(user);
  }

  async login(loginDto: CreateUserDto) {
    return 'tss';
  }

  private async generateToken(user) {
    const payload = { email: user.email };

    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
