import { Model } from 'mongoose';
import { Attempter } from 'src/Schemas/attempter.schema';
import { AttempterDto } from './attempter.dto';
import { Query } from 'express-serve-static-core';
export declare class AttempterService {
    private attempterModel;
    constructor(attempterModel: Model<Attempter>);
    getall(query: Query): Promise<Attempter[]>;
    add(createattempterDto: AttempterDto): Promise<Attempter>;
}
