import { Module } from '@nestjs/common';
import { TrackService } from './track.service';
import { TrackController } from './track.controller';
import { MongooseModule } from "@nestjs/mongoose";
import { Track, TrackSchema } from "./schemas/track.schema";
import { Comment, CommentSchema } from "./schemas/comment.schema";
import { FilesModule } from "../files/files.module";
import { FilesService } from "../files/files.service";

@Module({
  imports: [
    MongooseModule.forFeature([{name: Track.name, schema: TrackSchema}]),
    MongooseModule.forFeature([{name: Comment.name, schema: CommentSchema}]),
    FilesModule
  ],
  providers: [TrackService, FilesService],
  controllers: [TrackController],
  exports: [TrackService]
})
export class TrackModule {}
