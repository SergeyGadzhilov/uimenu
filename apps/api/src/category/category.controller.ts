import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  Req,
  HttpStatus,
  HttpException,
  UseInterceptors,
} from '@nestjs/common';
import { CategoryService } from './category.service';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { OwnerCheckInterceptor } from 'src/middleware/owner.interceptor';

@UseGuards(JwtAuthGuard)
@UseInterceptors(OwnerCheckInterceptor)
@Controller('/places/:placeId/categories')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

  @Post('')
  create(
    @Body() createCategoryDto: CreateCategoryDto,
    @Param('placeId') placeId: string,
    @Req() request: any,
  ) {
    this.authorize(request);
    createCategoryDto.placeId = placeId;
    return this.categoryService.create(createCategoryDto);
  }

  @Get()
  findAll(@Param('placeId') placeId: string) {
    return this.categoryService.findAll(placeId);
  }

  @Get(':id')
  findOne(@Param('id') id: string, @Req() request: any) {
    this.authorize(request);
    return this.categoryService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateCategoryDto: UpdateCategoryDto,
    @Req() request: any,
  ) {
    this.authorize(request);
    return this.categoryService.update(id, updateCategoryDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.categoryService.remove(id);
  }

  private authorize(request: any)
  {
    if (request.place.ownerId !== request.user.id) {
      throw new HttpException('Unauthorized', HttpStatus.UNAUTHORIZED);
    }
  }
}
