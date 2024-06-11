import { User } from '@prisma/client';

export class UserEntity implements User {
  updatedAt: Date;
  id: string;
  name: string;
  password: string;
  email: string;
  createdAt: Date;
}
