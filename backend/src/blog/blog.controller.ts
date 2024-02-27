import { Body, Controller, Get, HttpCode, Post, Param, Patch, Delete, UsePipes, ValidationPipe } from '@nestjs/common';
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
    async getById(@Param('id') id: string) {
        return this.blogService.getById(id);
    }

    // Create blog
    @HttpCode(201)
    @Post()
    @UsePipes(ValidationPipe)
    async createBlog(@Body() dto: BlogDto) {
        return this.blogService.create(dto);
    }

    
    // Update blog
    @UsePipes(ValidationPipe)
    @HttpCode(200)
    @Patch(':id')
    async updateBlog(@Param('id') id: string, @Body() dto: BlogDto) {
        return this.blogService.update(id, dto);
    }

    // Delete blog
    @HttpCode(200)
    @Delete(':id')
    async deleteBlog(@Param('id') id: string) {
        return this.blogService.delete(id);
    }
}
