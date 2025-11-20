// decorators/auth.decorator.ts
import { applyDecorators, UseGuards, SetMetadata } from '@nestjs/common';
import { RemoteAuthGuard } from '../guards/remote-auth.guard';
import { UserRoleGuard } from '../guards/user-role.guard';

export function Auth(...roles: string[]) {
  return applyDecorators(
    SetMetadata('roles', roles),
    UseGuards(RemoteAuthGuard, UserRoleGuard)
  );
}
