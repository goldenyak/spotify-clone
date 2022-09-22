import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Track, TrackDocument } from "./schemas/track.schema";
import { Model, ObjectId } from "mongoose";
import { Comment, CommentDocument } from "./schemas/comment.schema";
import { CreateTrackDto } from "./dto/create-track.dto";
import { CreateCommentDto } from "./dto/create-comment.dto";
import { FilesService, FileType } from "../files/files.service";


@Injectable()
export class TrackService {
  constructor(
    @InjectModel(Track.name) private trackModel: Model<TrackDocument>,
    @InjectModel(Comment.name) private commentModel: Model<CommentDocument>,
    private readonly fileService: FilesService
  ) {
  }

  async create(dto: CreateTrackDto, picture, audio): Promise<Track> {
    const audioPath = this.fileService.createFile(FileType.AUDIO, audio);
    const picturePath = this.fileService.createFile(FileType.IMAGE, picture);
    const track = await this.trackModel.create({ ...dto, listens: 0, audio: audioPath, picture: picturePath });
    return track;
  }

  async getAll(count = 10, offset = 0): Promise<Track[]> {
    const allTracks = await this.trackModel.find().skip(offset).limit(count);
    return allTracks;
  }

  async getOne(id: ObjectId): Promise<Track> {
    const currentTrack = await this.trackModel.findById(id).populate("comments");
    return currentTrack;
  }

  async deleteOne(id: ObjectId) {
    await this.trackModel.findByIdAndDelete({ _id: id });
    return "Трек удален!";
  }

  async deleteAll() {
    await this.trackModel.deleteMany();
    return "Все нахрен удалено!!!";

  }

  async addComment(dto: CreateCommentDto): Promise<Comment> {
    const track = await this.trackModel.findById(dto.trackId);
    const comment = await this.commentModel.create({ ...dto });
    if (comment) {
      track.comments.push(comment._id);
      await track.save();
    }
    return comment;
  }

  async listen(id: ObjectId) {
    const track = await this.trackModel.findById(id);
    track.listens += 1;
    track.save();
  }
}
