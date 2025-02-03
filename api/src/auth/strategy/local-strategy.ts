import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
    constructor() {
        super({
            // Mudar o nome da propriedade username para usernameField ex:
            //usernameField: 'username',
            // Mudar o nome da propriedade password para passwordField ex:
            //passwordField: 'password',
        });
    }

    async validate(username: string, password: string): Promise<any> {
        // Implementar aqui a lógica de autenticação
        if (username === 'admin' && password === 'admin') {
            return { username, password };
        } else {
            throw new UnauthorizedException('Usuário ou senha inválidos');
        }
    }
}