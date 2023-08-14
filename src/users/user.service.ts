/* eslint-disable prettier/prettier */
import { Model } from 'mongoose';
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User } from 'src/Schemas/user.shema';
import { UserDto } from './user.dto';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private userModel: Model<User>) {}

  async getall():Promise<User[]>{
    return await this.userModel.find().exec();
  }

  async add(createUserDto: UserDto): Promise<User> {
    const createdUser = new this.userModel(createUserDto);
    return createdUser.save();
  }

  async getByEmail(email:string): Promise<User> {
    const userData=await this.userModel.findOne({email:email});
    if(!userData){
        throw new NotFoundException(`User ${email} not found...!`);
    }
    return userData;
  }

  async updateUser(id:string,body:UserDto): Promise<User> {
    const updatedUser=await this.userModel.findByIdAndUpdate(id,body,{new:true});
    if(!updatedUser){
        throw new NotFoundException(`User ${body.username} not found...!`);
    }
    return updatedUser;
  }
}
