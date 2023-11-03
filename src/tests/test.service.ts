/* eslint-disable prettier/prettier */
/* eslint-disable prefer-const */
/* eslint-disable prettier/prettier */
import { Model, ObjectId } from 'mongoose';
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Test } from 'src/Schemas/test.schema';
// import { Question } from 'src/Schemas/question.schema';
import { TestDto } from './test.dto';
// import OpenAI from 'openai';
// import { QuestionService } from 'src/questions/question.service';


// import {OpenAI} from "langchain/llms/openai";
// import { PromptTemplate } from "langchain/prompts";
// import { StructuredOutputParser } from "langchain/output_parsers";
// import { RunnableSequence } from "langchain/schema/runnable";

@Injectable()
export class TestService {
  constructor(
    @InjectModel(Test.name) private testModel: Model<Test>,
    // private readonly questionService:QuestionService,
  ) {}

  async getall():Promise<Test[]>{
    return await this.testModel.find().populate('userid').exec();
  }

  async getByKey(testkey:string){
    let tempObj={key:testkey}
    // console.log("tempObj: ",tempObj);
    let test=await this.testModel.findOne(tempObj);
    // console.log("test in testService: ",test);
    return test;
  }

  async generateString(length) {
    let characters ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
      let result = '';
      const charactersLength = characters.length;
      for ( let i = 0; i < length; i++ ) {
          result += characters.charAt(Math.floor(Math.random() * charactersLength));
      }

      return result;
  }

  async add(createTestDto: TestDto): Promise<Test> {
    // const openai = new OpenAI({
    //   apiKey: process.env["OPENAI_API_KEY"]
    // });
    // const completion = await openai.chat.completions.create({
    //   messages: [{ role: 'user', content: `Generate a skill test related to the prompt: "${createTestDto.prompt}". There should be ${createTestDto.mcqs} MCQs, ${createTestDto.questions} theoretical questions, ${createTestDto.problems} problem solving questions. Your response should be an array of objects containing each question. Object of MCQ must be like {"q":"this is the question","o1":"option1","o2":"option2","o3":"option3","o4":"option4"} and other question's objects should be just like {"q":"this is the question"}. Just return me array of these objects nothing else !` }],
    //   model: 'gpt-3.5-turbo',
    // });
    // let response=completion.choices[0].message.content;
    // console.log("response: ",response);






    // console.log("parsed response: ",JSON.parse(response));






    // let structure={},genTemplate="",variables=[],inputQuest:any={};
    // if(createTestDto.mcqs<1){
    //   structure={
    //     question1:"problem solving or theoretical question",
    //     question2:"problem solving or theoretical question"
    //   }
    //   genTemplate="Generate questions according to the prompt: {prompt} \n Number of problem-solving questions: {psq} \n Number of theoretical questions: {tq} \n {format_instructions}"
    //   variables=["prompt","psq","tq"]
    //   inputQuest={
    //     prompt:createTestDto.prompt,
    //     psq:createTestDto.problems,
    //     tq:createTestDto.questions
    //   }
    // }
    // else{
    //   structure={
    //     mcq1:{
    //       question:"question for mcq",
    //       option1:"first option",
    //       option2:"second option",
    //       option3:"third option",
    //       option4:"fourth option"
    //     },
    //     question1:"problem solving or theoretical question",
    //     question2:"problem solving or theoretical question"
    //   }
    //   genTemplate="Generate questions according to the prompt: {prompt} \n Number of mcqs: {mcqs} \n Number of problem-solving questions: {psq} \n Number of theoretical questions: {tq} \n {format_instructions}"
    //   variables=["prompt","mcqs","psq","tq"]
    //   inputQuest={
    //     prompt:createTestDto.prompt,
    //     mcqs:createTestDto.mcqs,
    //     psq:createTestDto.problems,
    //     tq:createTestDto.questions
    //   }
    // }
    // const parser=StructuredOutputParser.fromNamesAndDescriptions(structure);
    // const formatInstructions=parser.getFormatInstructions();
    // const prompt=new PromptTemplate({
    //   template: genTemplate,
    //   inputVariables:variables,
    //   partialVariables:{format_instructions:formatInstructions}
    // });
    // const model = new OpenAI({ temperature: 0 });

    // const input=await prompt.format(inputQuest)
    // const response=await model.call(input)
    // console.log(await parser.parse(response));




    // const chain=RunnableSequence.from([
    //   PromptTemplate.fromTemplate(genTemplate),
    //   new OpenAI({temperature:0}),
    //   parser
    // ])
    // inputQuest.format_instructions=parser.getFormatInstructions();
    // const response=await chain.invoke(inputQuest);
    // console.log("response: ",response);

    let gottenTest=JSON.parse(JSON.stringify(createTestDto))
    let key:string=await this.generateString(6);
    gottenTest.key=key;
    const createdTest = new this.testModel(gottenTest);
    return createdTest.save();
  }

  async getByUserid(userid:string): Promise<any> {
    const testData=await this.testModel.find({userid:userid}).populate('userid');
    return testData;
  }
}
