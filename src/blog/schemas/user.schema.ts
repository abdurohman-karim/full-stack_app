import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';

@Schema()
export class UserSchema {
    @Prop({ required: true, unique: true })
    id: number;

    @Prop({ required: true })
    fullName: string;

    @Prop({required: true, unique: true})
    email: string;

    @Prop({required: true})
    password: string;
}
