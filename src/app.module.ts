import { Module } from '@nestjs/common';
import { TrackModule } from './track/track.module';
import { AlbumController } from './album/album.controller';
import { AlbumService } from './album/album.service';
import { AlbumModule } from './album/album.module';
import { TrackController } from "./track/track.controller";
import { TrackService } from "./track/track.service";
import { MongooseModule } from "@nestjs/mongoose";

@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://admin:admin@cluster0.dfscuay.mongodb.net/spotify-clone?retryWrites=true&w=majority'),
    TrackModule
  ],
})
export class AppModule {}
