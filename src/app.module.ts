import { Module } from '@nestjs/common';
import { TrackModule } from './track/track.module';
import { AlbumController } from './album/album.controller';
import { AlbumService } from './album/album.service';
import { AlbumModule } from './album/album.module';
import { TrackController } from "./track/track.controller";
import { TrackService } from "./track/track.service";

@Module({
  imports: [TrackModule, AlbumModule],
  controllers: [AlbumController, TrackController],
  providers: [ AlbumService, TrackService],
  exports: []
})
export class AppModule {}
