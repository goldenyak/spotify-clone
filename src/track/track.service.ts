import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Track, TrackDocument } from "./schemas/track.schema";
import { Model, ObjectId } from "mongoose";
import { Comment, CommentDocument } from "./schemas/comment.schema";
import { CreateTrackDto } from "./dto/create-track.dto";
import { CreateCommentDto } from "./dto/create-comment.dto";


@Injectable()
export class TrackService {
  constructor(
    @InjectModel(Track.name) private trackModel: Model<TrackDocument>,
    @InjectModel(Comment.name) private commentModel: Model<CommentDocument>
  ) {
  }

  async create(dto: CreateTrackDto, picture, audio): Promise<Track> {
    const track = await this.trackModel.create({ ...dto, listens: 0 });
    return track;
  }

  async getAll(): Promise<Track[]> {
    const allTracks = await this.trackModel.find();
    return allTracks;
  }

  async getOne(id: ObjectId): Promise<Track> {
    const currentTrack = await this.trackModel.findById(id).populate('comments');
    return currentTrack;
  }

  async deleteOne(id: ObjectId) {
    await this.trackModel.findByIdAndDelete({ _id: id });
    return "Трек удален!";
  }

  async deleteAll() {
    await this.trackModel.deleteMany();
    return "Все нахрен удалено!!!"

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
}
