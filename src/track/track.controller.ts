import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post, Query,
  UploadedFiles,
  UseInterceptors
} from "@nestjs/common";
import { TrackService } from "./track.service";
import { CreateTrackDto } from "./dto/create-track.dto";
import { ObjectId } from "mongoose";
import { CreateCommentDto } from "./dto/create-comment.dto";
import { FileFieldsInterceptor,} from "@nestjs/platform-express";

@Controller("/tracks")
export class TrackController {
  constructor(private readonly trackService: TrackService) {
  }

// Создание нового трека с подгрузкой файлов
  @Post()
  @UseInterceptors(FileFieldsInterceptor([
    { name: "picture", maxCount: 1 },
    { name: "audio", maxCount: 1 }
  ]))
  create(@UploadedFiles() files, @Body() dto: CreateTrackDto) {
    const { picture, audio } = files;
    return this.trackService.create(dto, picture[0], audio[0]);
  }

// Получение всех треков с пагинацией и поиском по name
  @Get()
  getAll(@Query("count") count: number,
         @Query("offset") offset: number,
         @Query("query") query: string
  ) {
    return this.trackService.getAll(count, offset, query);
  }

// Получение определенного трека по его ID
  @Get(":id")
  getOne(@Param("id") id: ObjectId) {
    return this.trackService.getOne(id);
  }

// Удаление определенного трека по его ID
  @Delete(":id")
  delete(@Param("id") id: ObjectId) {
    return this.trackService.deleteOne(id);
  }

// Удаление всего
  @Delete()
  deleteAll() {
    return this.trackService.deleteAll();
  }

// Добавление комментария к треку
  @Post("/add-comment")
  addComment(@Body() dto: CreateCommentDto) {
    return this.trackService.addComment(dto);
  }

  // Количество прослушиваний трека
  @Post("/listen/:id")
  listen(@Param("id") id: ObjectId) {
    return this.trackService.listen(id);
  }
}
