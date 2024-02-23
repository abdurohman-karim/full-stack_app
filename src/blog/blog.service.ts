import { Injectable } from '@nestjs/common';
import { BlogDto } from './dto/blog.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Blog, BlogDocument } from './schemas/blog.schema';

@Injectable()
export class BlogService {
    blogs: BlogDto[];
    constructor(@InjectModel(Blog.name) private blogModel: Model<BlogDocument>) {
        this.blogs = [
            {
                id: 1,
                title: 'Blog 1',
                content: 'Blog 1 content',
                excerpt: 'Blog 1 excerpt'
            },
            {
                id: 2,
                title: 'Blog 2',
                content: 'Blog 2 content',
                excerpt: 'Blog 2 excerpt'
            },
            {
                id: 3,
                title: 'Blog 3',
                content: 'Blog 3 content',
                excerpt: 'Blog 3 excerpt'
            },
        ]
    }
    async getAllBlog() {
        return this.blogModel.find();
    }

    async getById(id: number) {
        return this.blogs.find(blog => blog.id === Number(id));
    }

    async createBlog(dto: BlogDto) {
        const data: BlogDto = {
            id: this.blogs.length + 1,
            ...dto
        }
        return [...this.blogs, data];
    }

    async updateBlog(id: number, dto: BlogDto) {
        let currentBlog = this.blogs.find(blog => blog.id === Number(id));
        currentBlog = dto;
        return currentBlog;
    } 

    async deleteBlog(id: number) {
        this.blogs = this.blogs.filter(blog => blog.id !== Number(id));
        return this.blogs;
    }
}
