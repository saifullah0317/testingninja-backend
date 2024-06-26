import { Model } from 'mongoose';
import { Attempter } from 'src/Schemas/attempter.schema';
import { AttempterInterface } from 'src/Schemas/attempter.schema';
import { AttempterDto } from './attempter.dto';
export declare class AttempterService {
    private attempterModel;
    constructor(attempterModel: Model<Attempter>);
    getbyEmail(email: string): Promise<AttempterInterface>;
    getbyIds(ids: string[]): Promise<string[]>;
    add(createattempterDto: AttempterDto): Promise<AttempterInterface>;
}
