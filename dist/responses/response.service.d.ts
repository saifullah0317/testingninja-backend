import { Model } from 'mongoose';
import { Response } from 'src/Schemas/response.schema';
import { ResponseDto } from './response.dto';
import { AttempterService } from 'src/attempters/attempter.service';
import { QuestionService } from 'src/questions/question.service';
import { TestService } from 'src/tests/test.service';
export declare class ResponseService {
    private responseModel;
    private readonly attempterService;
    private readonly questionService;
    private readonly testService;
    constructor(responseModel: Model<Response>, attempterService: AttempterService, questionService: QuestionService, testService: TestService);
    get(query: any): Promise<Response[]>;
    add(createquestionDto: ResponseDto): Promise<Response>;
}
