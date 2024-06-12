import { User } from '@prisma/client';

export class UserEntity implements User {
  updatedAt: Date;
  id: number;
  name: string;
  password: string;
  email: string;
  createdAt: Date;
}
