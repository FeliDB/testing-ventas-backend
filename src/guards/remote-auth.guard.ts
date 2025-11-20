// guards/remote-auth.guard.ts
import { Injectable, CanActivate, ExecutionContext, UnauthorizedException } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class RemoteAuthGuard implements CanActivate {
  constructor(private readonly httpService: HttpService) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    const token = request.headers.authorization?.replace('Bearer ', '');

    if (!token) {
      throw new UnauthorizedException('Token not found');
    }

    try {
      const response = await firstValueFrom(
        this.httpService.post('http://localhost:3001/auth/validate', {}, {
          headers: { Authorization: `Bearer ${token}` }
        })
      );
      
      request.user = response.data.user;
      return true;
    } catch {
      throw new UnauthorizedException('Invalid token');
    }
  }
}
