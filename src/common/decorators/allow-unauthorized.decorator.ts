import { SetMetadata } from '@nestjs/common';

export const ALLOW_UNAUTHORIZED_ACCESS = 'allowUnauthorizedAccess';
export const AllowUnauthorizedAccess = () => SetMetadata(ALLOW_UNAUTHORIZED_ACCESS, true);