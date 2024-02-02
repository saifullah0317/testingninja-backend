import { AttempterListService } from './attempterlist.service';
import { AttempterList, AttempterListInterface } from 'src/Schemas/attempterList.schema';
import { AttempterListDto } from './attempterlist.dto';
import { AuthService } from 'src/auth/auth.service';
import { AttempterService } from 'src/attempters/attempter.service';
export declare class AttempterListController {
    private readonly attempterService;
    private readonly attempterListService;
    private readonly authService;
    constructor(attempterService: AttempterService, attempterListService: AttempterListService, authService: AuthService);
    getall(req: any): Promise<AttempterList[]>;
    updateList(id: string, req: any, body: AttempterListInterface): Promise<AttempterList>;
    addlist(req: any, body: AttempterListDto): Promise<AttempterList>;
}
