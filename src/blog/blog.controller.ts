import { Body, Controller, Get, HttpCode, Post } from '@nestjs/common';
import { BlogDto } from './dto/blog.dto';

@Controller('blog')
export class BlogController {
    blogs: BlogDto[];

    constructor() {
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
    @HttpCode(200)
    @Get()
    async getBlog() {
        return this.blogs;
    }

    @HttpCode(201)
    @Post()
    async createBlog(@Body() dto: BlogDto) {
        const data: BlogDto = {
            id: this.blogs.length + 1,
            ...dto
        }
        return [...this.blogs, data];
    }
}
