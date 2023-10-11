import { Result } from 'src/Schemas/result.schema';
import { ResultService } from './result.service';
import { ResultDto } from './result.dto';
export declare class ResultController {
    private readonly resultService;
    constructor(resultService: ResultService);
    get(id: string): Promise<Result[]>;
    add(body: ResultDto): Promise<Result>;
}
