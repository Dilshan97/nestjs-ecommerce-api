/*
 *   Copyright (c) 2024 Dilshan Ramesh
 *   All rights reserved.
 */
import { Controller, Post } from '@nestjs/common';

@Controller('auth')
export class AuthController {
  @Post('/login')
  login() {
    return 'Login successful';
  }

  @Post('/register')
  register() {
    return 'Registration successful';
  }

  @Post('/logout')
  logout() {
    return 'Logout successful';
  }
}
