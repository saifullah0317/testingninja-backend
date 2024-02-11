import { Model } from 'mongoose';
import { AttempterList, AttempterListInterface } from 'src/Schemas/attempterList.schema';
import { AttempterService } from 'src/attempters/attempter.service';
import { Attempter } from 'src/Schemas/attempter.schema';
export declare class AttempterListService {
    private attempterListModel;
    private readonly attempterService;
    constructor(attempterListModel: Model<AttempterList>, attempterService: AttempterService);
    checkAttempterListDuplication(userId: string, attemptersList: string[], id: string): Promise<string>;
    checkTitleDuplication(userId: string, title: string, id: string): Promise<boolean>;
    getAttemptersByEmails(emails: string[]): Promise<string[]>;
    getbyuserid(userid: string): Promise<AttempterList[]>;
    getByListId(listId: string): Promise<Attempter[]>;
    updateList(listId: string, newList: AttempterListInterface): Promise<AttempterList>;
    addlist(newlist: AttempterListInterface): Promise<AttempterList>;
    deletelist(id: string): Promise<AttempterList>;
}
