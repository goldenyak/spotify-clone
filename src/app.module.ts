import { Module } from '@nestjs/common';
import { TrackModule } from './track/track.module';
import { MongooseModule } from "@nestjs/mongoose";
import { FilesModule } from './files/files.module';
import { ServeStaticModule } from "@nestjs/serve-static";
import * as path from "path";

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: path.resolve(__dirname, 'static'),
    }),
    MongooseModule.forRoot('mongodb+srv://admin:admin@cluster0.dfscuay.mongodb.net/spotify-clone?retryWrites=true&w=majority'),
    TrackModule,
    FilesModule
  ],
})
export class AppModule {}
