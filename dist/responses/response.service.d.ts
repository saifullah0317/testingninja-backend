import { Model } from 'mongoose';
import { Response } from 'src/Schemas/response.schema';
import { ResponseDto } from './response.dto';
export declare class ResponseService {
    private responseModel;
    constructor(responseModel: Model<Response>);
    get(query: any): Promise<Response[]>;
    add(createquestionDto: ResponseDto): Promise<Response>;
}
