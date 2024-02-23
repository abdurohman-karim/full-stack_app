import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BlogModule } from './blog/blog.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [MongooseModule.forRoot(
    "mongodb+srv://abdurohman:OIBKn3IzP1eiwYLz@cluster0.iijyf2b.mongodb.net/?retryWrites=true&w=majority"
    ),
    BlogModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
