import { User } from '@prisma/client';

export class UserEntity implements User {
  id: string;
  name: string;
  password: string;
  email: string;
  createdAt: Date;
}
