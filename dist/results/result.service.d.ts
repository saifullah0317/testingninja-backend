import { Model } from 'mongoose';
import { Result } from 'src/Schemas/result.schema';
import { ResultDto } from './result.dto';
export declare class ResultService {
    private resultModel;
    constructor(resultModel: Model<Result>);
    get(id: string): Promise<Result[]>;
    add(createquestionDto: ResultDto): Promise<Result>;
}
