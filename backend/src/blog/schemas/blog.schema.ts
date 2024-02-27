import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type BlogDocument = HydratedDocument<Blog>;

@Schema()
export class Blog {
    @Prop({required: true})
    title: string;
  
    @Prop({required: true})
    content: string;
  
    @Prop({required: true})
    excerpt : string;
}

export const BlogSchema = SchemaFactory.createForClass(Blog);
