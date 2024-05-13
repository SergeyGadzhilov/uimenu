import { Inject, Injectable } from '@nestjs/common';
import { CreateOrderDto } from './dto/create-menu.dto';
import { UpdtateOrderDto } from './dto/update-menu.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class MenuService {
  constructor(
    private prisma: PrismaService
  ) {}

  async create(createOrderDto) {
    return await this.prisma.order.create({
      data: { ...createOrderDto },
    });
  }

  async findMenu(placeId: string) {
    return await this.prisma.place.findUnique({
      where: { id: placeId },
      include: { categories: { include: { items: true } } },
    });
  }

  findOne(id: number) {
    return `This action returns a #${id} menu`;
  }

  async update(id: number, updtateOrderDto: UpdtateOrderDto) {
    return await this.prisma.order.update({
      where: { id: id },
      data: { ...updtateOrderDto },
    });
  }

  async remove(id: number) {
    return await this.prisma.order.delete({ where: { id: id } });
  }
}
