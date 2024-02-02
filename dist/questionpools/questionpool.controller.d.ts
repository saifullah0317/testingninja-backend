import { AuthService } from 'src/auth/auth.service';
import { QuestionPoolService } from './questionpool.service';
import { QuestionPool } from 'src/Schemas/questionPool.schema';
import { QuestionPoolDto } from './questionpool.dto';
export declare class QuestionPoolController {
    private readonly questionPoolService;
    private readonly authService;
    constructor(questionPoolService: QuestionPoolService, authService: AuthService);
    getall(req: any): Promise<QuestionPool[]>;
    addlist(req: any, body: QuestionPoolDto): Promise<QuestionPool>;
}
