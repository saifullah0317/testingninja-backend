/* eslint-disable prettier/prettier */
/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import { Model, ObjectId } from 'mongoose';
import { HttpException, HttpStatus, Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { AttempterList, AttempterListFrontendInterface, AttempterListInterface } from 'src/Schemas/attempterList.schema';
import { AttempterListDto } from './attempterlist.dto';
import { AttempterService } from 'src/attempters/attempter.service';
import { Attempter } from 'src/Schemas/attempter.schema';

@Injectable()
export class AttempterListService {
  constructor(@InjectModel(AttempterList.name) private attempterListModel: Model<AttempterList>, private readonly attempterService:AttempterService) {}

  async checkAttempterListDuplication(userId:string,attemptersList:string[]):Promise<string>{
    const foundAttemptersList=await this.attempterListModel.findOne({$and:[{userid:userId},{attempters:attemptersList}]});
    if(foundAttemptersList){
      return foundAttemptersList.title;
    }
    else{
      return "";
    }
  }

  async getAttemptersByEmails(emails:string[]):Promise<string[]>{
    const attemptersIds=[];
    let index=0;
    while(index<emails.length){
      const foundAttempter=await this.attempterService.getbyEmail(emails[index]);
      // if attempter already found
      if(foundAttempter){
        attemptersIds.push(foundAttempter._id);
      }
      // otherwise create new
      else{
        const createdAttempter=await this.attempterService.add({email:emails[index]});
        attemptersIds.push(createdAttempter._id);
      }
      index++;
    }
    return attemptersIds;
  }

  async getbyuserid(userid:string):Promise<AttempterList[]>{
    return await this.attempterListModel.find({userid}).populate('attempters');
  }

  async getByListId(listId:string):Promise<Attempter[]>{
    const foundList=await this.attempterListModel.findById(listId);
    if(foundList){
      return foundList.attempters;
    } 
    else{
      throw new HttpException('error fetching lists, try again',HttpStatus.BAD_REQUEST);
    }
  }

  async updateList(listId:string,newList:AttempterListInterface):Promise<AttempterList>{
    try {
      const tempObj=JSON.parse(JSON.stringify(newList));
      tempObj.attempters=await this.getAttemptersByEmails(newList.attempters);
      const foundAttemptersList=await this.checkAttempterListDuplication(tempObj.userid,tempObj.attempters);
      if(foundAttemptersList){
        throw new HttpException(`Respondents list already found with the name: "${foundAttemptersList}"`,HttpStatus.BAD_REQUEST);
      }
      const updatedList=await this.attempterListModel.findByIdAndUpdate(listId,tempObj,{new:true});
      if(updatedList){
        return updatedList;
      }
      else{
        throw new HttpException('List not found',HttpStatus.BAD_REQUEST);
      } 
    } catch (error) {
      throw new HttpException(error,HttpStatus.BAD_REQUEST);
    }
  }

  async addlist(newlist:AttempterListInterface):Promise<AttempterList>{
    try {
      const attemptersIds=await this.getAttemptersByEmails(newlist.attempters);
      // if same list found against the same user 
      const foundAttemptersList=await this.checkAttempterListDuplication(newlist.userid,attemptersIds);
      if (foundAttemptersList){
        console.log("error in service: ",foundAttemptersList);
        throw new HttpException(`Respondents list already found with the name: "${foundAttemptersList}"`,HttpStatus.BAD_REQUEST);
      }
      else{
        newlist.attempters=attemptersIds;
        const createdlist=new this.attempterListModel(newlist);
        return createdlist.save();
      }
    } catch (error) {
      throw new HttpException(error,HttpStatus.BAD_REQUEST);
    }
  }
}
 