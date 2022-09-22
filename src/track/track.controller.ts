import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  UploadedFile,
  UploadedFiles,
  UseInterceptors
} from "@nestjs/common";
import { TrackService } from "./track.service";
import { CreateTrackDto } from "./dto/create-track.dto";
import { ObjectId } from "mongoose";
import { CreateCommentDto } from "./dto/create-comment.dto";
import { FileFieldsInterceptor, FileInterceptor } from "@nestjs/platform-express";

@Controller("/tracks")
export class TrackController {
  constructor(private readonly trackService: TrackService) {
  }

  @Post()
  @UseInterceptors(FileFieldsInterceptor([
    { name: 'picture', maxCount: 1 },
    { name: 'audio', maxCount: 1 },
  ]))
  create(@UploadedFiles() files, @Body() dto: CreateTrackDto) {
    console.log(files);
    return this.trackService.create(dto, '', '');
  }

  @Get()
  getAll() {
    return this.trackService.getAll();
  }

  @Get(":id")
  getOne(@Param("id") id: ObjectId) {
    return this.trackService.getOne(id);
  }

  @Delete(":id")
  delete(@Param("id") id: ObjectId) {
    return this.trackService.deleteOne(id);
  }


  @Delete()
  deleteAll() {
    return this.trackService.deleteAll();
  }

  @Post("/add-comment")
  addComment(@Body() dto: CreateCommentDto) {
    return this.trackService.addComment(dto);
  }
}