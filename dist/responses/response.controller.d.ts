import { ResponseService } from './response.service';
import { Response } from 'src/Schemas/response.schema';
import { ResponseDto } from './response.dto';
import { Query as ExpressQuery } from 'express-serve-static-core';
export declare class ResponseController {
    private readonly responseService;
    constructor(responseService: ResponseService);
    get(query: ExpressQuery): Promise<Response[]>;
    add(body: ResponseDto): Promise<Response>;
}
