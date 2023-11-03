import { AttempterService } from './attempter.service';
import { Attempter, AttempterInterface } from 'src/Schemas/attempter.schema';
import { AttempterDto } from './attempter.dto';
import { Query as ExpressQuery } from 'express-serve-static-core';
export declare class AttempterController {
    private readonly attempterService;
    constructor(attempterService: AttempterService);
    getbyEmail(query: ExpressQuery): Promise<AttempterInterface>;
    add(body: AttempterDto): Promise<Attempter>;
}
