import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';

export type BlogDocument = HydratedDocument<Blog>;

@Schema()
export class Blog {
    @Prop({required: true, type: mongoose.Schema.ObjectId, ref: "User"})
    id: number;

    @Prop({required: true})
    title: string;
  
    @Prop({required: true})
    content: number;
  
    @Prop({required: true})
    excerpt : string;
    
}

export const BlogSchema = SchemaFactory.createForClass(Blog);
