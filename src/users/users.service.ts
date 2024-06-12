import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class UsersService {
  constructor(private readonly prisma: PrismaService) {}

  async create({ email, name, password }: CreateUserDto) {
    return await this.prisma.user.create({
      data: {
        email,
        name,
        password,
      },
      select: {
        id: true,
        name: true,
      },
    });
  }

  async findAll() {
    return await this.prisma.user.findMany();
  }

  async findOne(id: number) {
    return await this.prisma.user.findUnique({
      where: {
        id,
      },
    });
  }

  async update(id: number, data: UpdateUserDto) {
    await this.exists(id);

    return this.prisma.user.update({
      data,
      where: {
        id,
      },
    });
  }

  async remove(id: number) {
    await this.exists(id);

    return this.prisma.user.delete({
      where: {
        id,
      },
    });
  }

  async exists(id: number) {
    if (!(await this.findOne(id))) {
      throw new NotFoundException(`O usuário ${id} não existe`);
    }
  }
}
