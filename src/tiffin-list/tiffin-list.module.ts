import { Module } from '@nestjs/common';
import { TiffinListController } from './tiffin-list.controller';
import { TiffinListService } from './tiffin-list.service';

@Module({
  controllers: [TiffinListController],
  providers: [TiffinListService]
})
export class TiffinListModule {}
