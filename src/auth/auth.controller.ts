import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('/registration')
  registration(@Body() createAuthDto) {
    return this.authService.registration(createAuthDto);
  }

  @Post('/login')
  login(@Body() createAuthDto) {
    return this.authService.login(createAuthDto);
  }
}
