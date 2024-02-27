import { Injectable } from '@nestjs/common';
import { BlogDto } from './dto/blog.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Blog, BlogDocument } from './schemas/blog.schema';

@Injectable()
export class BlogService {
    blogs: BlogDto[];
    constructor(@InjectModel(Blog.name) private blogModel: Model<BlogDocument>) {}
    async getAllBlog() {
        return this.blogModel.find({});
    }

    async getById(id: string) {
        return this.blogModel.findById(id);
    }

    async create(dto: BlogDto) {
        return this.blogModel.create(dto);
    }

    async update(id: string, dto: BlogDto) {
        return this.blogModel.findByIdAndUpdate(id, dto, {new: true});
    } 

    async delete(id: string) {
        return this.blogModel.findByIdAndDelete(id);
    }
}
