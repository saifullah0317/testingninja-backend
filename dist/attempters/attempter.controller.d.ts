import { AttempterService } from './attempter.service';
import { Attempter } from 'src/Schemas/attempter.schema';
import { AttempterDto } from './attempter.dto';
import { Query as ExpressQuery } from 'express-serve-static-core';
export declare class AttempterController {
    private readonly attempterService;
    constructor(attempterService: AttempterService);
    getall(query: ExpressQuery): Promise<Attempter[]>;
    add(body: AttempterDto): Promise<Attempter>;
}
