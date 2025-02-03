import { Controller, Post, Request, UseGuards } from '@nestjs/common';
import { LocalAuthGuard } from './guard/local-auth.guard';
import { AuthService } from './auth.service';
import { Publico } from 'src/util/decorator/publico.decorator';

@Controller('auth')
export class AuthController {
    constructor(
        private authService: AuthService
    ) { }

    @Publico()
    @UseGuards(LocalAuthGuard)
    @Post('login')
    async login(@Request() req) {
        return await this.authService.login(req.user);
    }
}
