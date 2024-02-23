import { Body, Controller, Get, HttpCode, Post, Param, Patch, Delete } from '@nestjs/common';
import { BlogDto } from './dto/blog.dto';
import { BlogService } from './blog.service';

@Controller('blog')
export class BlogController {
    constructor(private readonly blogService: BlogService) {}

    // Get all blogs
    @HttpCode(200)
    @Get()
    async getAllBlog() {
        return this.blogService.getAllBlog();
    } 

    // Get a specific blog
    @Get(':id')
    async getById(@Param('id') id: string): Promise<BlogDto> {
        return this.blogService.getById(Number(id));
    }

    // Create blog
    @HttpCode(201)
    @Post()
    async createBlog(@Body() dto: BlogDto) {
        return this.blogService.createBlog(dto);
    }

    // Update blog
    @HttpCode(200)
    @Patch(':id')
    async updateBlog(@Param('id') id: string, @Body() dto: BlogDto) {
        return this.blogService.updateBlog(Number(id), dto);
    }

    // Delete blog
    @HttpCode(200)
    @Delete(':id')
    async deleteBlog(@Param('id') id: string) {
        return this.blogService.deleteBlog(Number(id));
    }
}
