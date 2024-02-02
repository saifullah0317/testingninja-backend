import { AttempterService } from './attempter.service';
import { AttempterInterface } from 'src/Schemas/attempter.schema';
import { AttempterDto } from './attempter.dto';
export declare class AttempterController {
    private readonly attempterService;
    constructor(attempterService: AttempterService);
    add(body: AttempterDto): Promise<AttempterInterface | unknown>;
}
