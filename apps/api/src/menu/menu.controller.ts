import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { MenuService } from './menu.service';
import { CreateOrderDto } from './dto/create-menu.dto';
import { UpdtateOrderDto } from './dto/update-menu.dto';

@Controller('/menu/:placeId/')
export class MenuController {
  constructor(private readonly menuService: MenuService) {}

  @Post('/order')
  create(@Body() createOrderDto: CreateOrderDto) {
    return this.menuService.create(createOrderDto);
  }

  @Get()
  findMenu(@Param('placeId') placeId: string) {
    return this.menuService.findMenu(placeId);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.menuService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updtateOrderDto: UpdtateOrderDto) {
    return this.menuService.update(+id, updtateOrderDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.menuService.remove(+id);
  }
}
