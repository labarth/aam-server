import {
  HttpException,
  HttpStatus,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { CreateUserDto } from '../users/dto/create-user.dto';
import { UsersService } from '../users/users.service';
import { LoginDto } from './dto/login.dto';

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

  async login(dto: LoginDto) {
    try {
      const user = await this.userService.findUserByEmail(dto.email);
      const compare = await bcrypt.compare(dto.password, user.password);

      if (user && compare) {
        return this.generateToken(user);
      }

      throw new UnauthorizedException('incorrect password or email');
    } catch (e) {
      throw new UnauthorizedException('incorrect password or email');
    }
  }

  private async generateToken(user) {
    const payload = { email: user.email, firstName: user.firstName };

    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
