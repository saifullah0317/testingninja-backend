/* eslint-disable prettier/prettier */
/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import { Model, ObjectId } from 'mongoose';
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { AttempterList } from 'src/Schemas/attempterList.schema';
import { CategoryDto } from './category.dto';
import { Category } from 'src/Schemas/category.schema';

@Injectable()
export class CategoryService {
  constructor(@InjectModel(Category.name) private categoryModel: Model<AttempterList>) {}

  async getbyuserid(userid:string):Promise<any[]>{
    return await this.categoryModel.find({userid}).exec();
  }

  async add(newCategory:Category):Promise<any>{
    const createdCategory=new this.categoryModel(newCategory);
    return createdCategory.save();
  }
}
