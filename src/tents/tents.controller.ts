import { Body, Controller, Delete, Get, Post } from '@nestjs/common';
import { TentsService } from './tents.service';
import { TentDto } from './dto/tent.dto';

@Controller('tents')
export class TentsController {
  constructor(private readonly tentsService: TentsService) {}

  @Post()
  async createTent(@Body() tentBody: TentDto) {
    return this.tentsService.createTent(tentBody);
  }

  @Post('join')
  async joinTent(@Body() tentBody: any) {
    const { userId, tentId } = tentBody;
    return this.tentsService.joinTent(userId, tentId);
  }

  @Get()
  async getAllTents() {
    return this.tentsService.getAllTents();
  }

  @Delete('leave')
  async leaveTent(@Body() tentBody: any) {
    const { userId, tentId } = tentBody;
    return this.tentsService.leaveTent(userId, tentId);
  }
}
