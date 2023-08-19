/* eslint-disable prettier/prettier */
import { Model } from 'mongoose';
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User } from 'src/Schemas/user.shema';
import { UserDto } from './user.dto';
import { UserInterface } from 'src/Schemas/user.shema';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private userModel: Model<UserInterface>) {}

  async login(body):Promise<any>{
    const loggedinUser=await this.getByEmail(body.email);
    // if(!loggedinUser){
    //   return {message:"Invalid email!"}
    // }
    // const {password,...payload}=loggedinUser;
    if(body.password!==loggedinUser.password){
      // return {message:"Invalid password!"}
      return false;
    }
    else{
      return {userId:loggedinUser._id};
    }
  }

  async getall():Promise<User[]>{
    return await this.userModel.find().exec();
  }

  async add(createUserDto: UserDto): Promise<UserInterface> {
    const createdUser = new this.userModel(createUserDto);
    return createdUser.save();
  }

  async getByEmail(email:string): Promise<UserInterface> {
    const userData=await this.userModel.findOne({email:email});
    if(!userData){
        throw new NotFoundException('Invalid email !');
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
